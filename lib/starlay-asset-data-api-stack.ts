import {
  AuthorizationType,
  DynamoDbDataSource,
  FieldLogLevel,
  GraphqlApi,
  GraphqlApiProps,
  MappingTemplate,
  Schema,
} from '@aws-cdk/aws-appsync'
import {
  AttributeType,
  BillingMode,
  ProjectionType,
  Table,
} from '@aws-cdk/aws-dynamodb'
import { Rule, Schedule } from '@aws-cdk/aws-events'
import { LambdaFunction } from '@aws-cdk/aws-events-targets'
import { Effect, PolicyStatement } from '@aws-cdk/aws-iam'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import {
  Construct,
  Duration,
  Expiration,
  RemovalPolicy,
  Stack,
  StackProps,
} from '@aws-cdk/core'
import { join } from 'path'
import { addLambdaErrorAlarm } from './lamabda-alarms'
export const tableName = 'starlay-asset-data-table'

export class StarlayAssetDataApiStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)
    const table = new Table(this, tableName, {
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
      tableName: tableName,
      removalPolicy: RemovalPolicy.DESTROY,
      billingMode: BillingMode.PAY_PER_REQUEST,
    })

    table.addGlobalSecondaryIndex({
      indexName: 'GSI-1',
      partitionKey: {
        name: 'type',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'number',
        type: AttributeType.NUMBER,
      },
      projectionType: ProjectionType.ALL,
    })

    const api = new GraphqlApi(this, 'graphqlapi', apiProps())
    const ddbDs = new DynamoDbDataSource(this, 'ddbDataSource', {
      api,
      table,
      readOnlyAccess: true,
    })
    api.createResolver({
      typeName: 'Query',
      fieldName: 'getAssetData',
      dataSource: ddbDs,
      requestMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getAssetData.request.vtl',
        ),
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getAssetData.response.vtl',
        ),
      ),
    })
    api.createResolver({
      typeName: 'Query',
      fieldName: 'getStatistics',
      dataSource: ddbDs,
      requestMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getStatistics.request.vtl',
        ),
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getStatistics.response.vtl',
        ),
      ),
    })
    api.createResolver({
      typeName: 'Query',
      fieldName: 'healthFactors',
      dataSource: ddbDs,
      requestMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'healthFactors.request.vtl',
        ),
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'healthFactors.response.vtl',
        ),
      ),
    })
    const updatorFunction = new NodejsFunction(this, 'asset-data-updator', {
      entry: 'src/incentive/index.ts',
      handler: 'handler',
      timeout: Duration.minutes(1),
      memorySize: 1024,
    })
    updatorFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['dynamodb:PutItem'],
        effect: Effect.ALLOW,
        resources: [table.tableArn],
      }),
    )
    new Rule(this, 'updatorExecutionRule', {
      schedule: Schedule.cron({
        hour: '0',
        minute: '0',
      }),
      targets: [
        new LambdaFunction(updatorFunction, {
          retryAttempts: 3,
        }),
      ],
    })
    const statsFunction = new NodejsFunction(this, 'statistics-updator', {
      entry: 'src/userStats/index.ts',
      handler: 'handler',
      timeout: Duration.minutes(15),
      memorySize: 1024,
    })
    statsFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['dynamodb:GetItem', 'dynamodb:PutItem', 'dynamodb:Batch*'],
        effect: Effect.ALLOW,
        resources: [table.tableArn],
      }),
    )
    new Rule(this, 'statisticsUpdatorExecutionRule', {
      schedule: Schedule.cron({
        minute: '0/30',
      }),
      targets: [
        new LambdaFunction(statsFunction, {
          retryAttempts: 3,
        }),
      ],
    })

    addLambdaErrorAlarm(this, 'statistics-updator', {
      metric: statsFunction.metricErrors({ period: Duration.minutes(30) }),
      evaluationPeriods: 3,
      datapointsToAlarm: 2,
      threshold: 2,
    })
  }
}

const apiProps = (): GraphqlApiProps => {
  return {
    xrayEnabled: true,
    name: 'starlay-graphql-api',
    logConfig: {
      fieldLogLevel: FieldLogLevel.ALL,
      excludeVerboseContent: false,
    },
    schema: Schema.fromAsset(join(__dirname, '..', 'schema/schema.graphql')),
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: AuthorizationType.API_KEY,
        apiKeyConfig: {
          expires: Expiration.after(Duration.days(365)),
          description: 'default',
        },
      },
    },
  }
}
