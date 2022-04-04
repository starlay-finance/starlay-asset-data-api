import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Stack, StackProps, Construct, Duration } from '@aws-cdk/core';
import { Rule } from '@aws-cdk/aws-events';
import { Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import { PolicyStatement, Effect } from '@aws-cdk/aws-iam';

export class StarlayMonitorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const monitorFunction = new NodejsFunction(this, 'monitor-oracle', {
      entry: 'src/oracleDivergency/index.ts',
      handler: 'handler',
      timeout: Duration.minutes(1),
      memorySize: 256,
    });
    monitorFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['ssm:Get*'],
        effect: Effect.ALLOW,
        resources: [
          `arn:aws:ssm:${this.region}:${this.account}:parameter/starlay-slack-webhook-url*`,
        ],
      })
    );
    new Rule(this, 'oracleMonitorExecutionRule', {
      schedule: Schedule.cron({
        minute: '0/30',
      }),
      targets: [
        new LambdaFunction(monitorFunction, {
          retryAttempts: 3,
        }),
      ],
    });
  }
}
