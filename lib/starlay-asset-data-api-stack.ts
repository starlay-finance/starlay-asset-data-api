import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import {
  AuthorizationType,
  DynamoDbDataSource,
  FieldLogLevel,
  GraphqlApi,
  GraphqlApiProps,
  MappingTemplate,
  Schema,
} from '@aws-cdk/aws-appsync';
import { AttributeType, ProjectionType, Table } from '@aws-cdk/aws-dynamodb';
import {
  Stack,
  StackProps,
  Construct,
  Expiration,
  Duration,
  RemovalPolicy,
} from '@aws-cdk/core';
import { join } from 'path';
import { Rule } from '@aws-cdk/aws-events';
import { Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import { PolicyStatement, Effect } from '@aws-cdk/aws-iam';
export const tableName = 'starlay-asset-data-table';

export class StarlayAssetDataApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const table = new Table(this, tableName, {
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
      tableName: tableName,
      removalPolicy: RemovalPolicy.DESTROY,
    });
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
    });

    const api = new GraphqlApi(this, 'graphqlapi', apiProps());
    const ddbDs = new DynamoDbDataSource(this, 'ddbDataSource', {
      api,
      table,
      readOnlyAccess: true,
    });
    api.createResolver({
      typeName: 'Query',
      fieldName: 'getAssetData',
      dataSource: ddbDs,
      requestMappingTemplate: MappingTemplate.fromFile(
        join(__dirname, '..', 'schema', 'templates', 'getAssetData.request.vtl')
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getAssetData.response.vtl'
        )
      ),
    });
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
          'getStatistics.request.vtl'
        )
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'getStatistics.response.vtl'
        )
      ),
    });
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
          'healthFactors.request.vtl'
        )
      ),
      responseMappingTemplate: MappingTemplate.fromFile(
        join(
          __dirname,
          '..',
          'schema',
          'templates',
          'healthFactors.response.vtl'
        )
      ),
    });
    const updatorFunction = new NodejsFunction(this, 'asset-data-updator', {
      entry: 'src/incentive/index.ts',
      handler: 'handler',
      timeout: Duration.seconds(30),
      memorySize: 1024,
    });
    updatorFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['dynamodb:PutItem'],
        effect: Effect.ALLOW,
        resources: [table.tableArn],
      })
    );
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
    });
    const statsFunction = new NodejsFunction(this, 'statistics-updator', {
      entry: 'src/userStats/index.ts',
      handler: 'handler',
      timeout: Duration.minutes(10),
      memorySize: 1024,
    });
    statsFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['dynamodb:PutItem'],
        effect: Effect.ALLOW,
        resources: [table.tableArn],
      })
    );
    new Rule(this, 'statisticsUpdatorExecutionRule', {
      schedule: Schedule.cron({
        minute: '0/30',
      }),
      targets: [
        new LambdaFunction(updatorFunction, {
          retryAttempts: 3,
        }),
      ],
    });
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
  };
};
