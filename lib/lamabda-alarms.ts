import { CfnSlackChannelConfiguration } from '@aws-cdk/aws-chatbot'
import { Alarm, ComparisonOperator, IMetric } from '@aws-cdk/aws-cloudwatch'
import { SnsAction } from '@aws-cdk/aws-cloudwatch-actions'
import { PolicyStatement, Role, ServicePrincipal } from '@aws-cdk/aws-iam'
import { Topic } from '@aws-cdk/aws-sns'
import { StringParameter } from '@aws-cdk/aws-ssm'
import { Stack } from '@aws-cdk/core'

const projectName = 'starlay'

export const addLambdaErrorAlarm = (
  stack: Stack,
  functionName: string,
  alarmConfig: {
    metric: IMetric
    evaluationPeriods: number
    threshold: number
    datapointsToAlarm: number
  },
) => {
  const topicName = resouceName('Topic', functionName)
  const topic = new Topic(stack, topicName, {
    displayName: topicName,
    topicName: topicName,
  })

  const alarmName = resouceName('Alarm', functionName)
  const alarm = new Alarm(stack, alarmName, {
    alarmName: alarmName,
    actionsEnabled: true,
    comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
    ...alarmConfig,
  })
  alarm.addAlarmAction(new SnsAction(topic))

  const roleName = resouceName('ChatbotRole-notify', functionName)
  const chatbotRole = new Role(stack, roleName, {
    roleName,
    assumedBy: new ServicePrincipal('sns.amazonaws.com'),
  })
  chatbotRole.addToPolicy(
    new PolicyStatement({
      resources: ['*'],
      actions: ['cloudwatch:Describe*', 'cloudwatch:Get*', 'cloudwatch:List*'],
    }),
  )

  const slackChannelId = StringParameter.fromStringParameterAttributes(
    stack,
    `parameter-${projectName}-slack-channel-id`,
    { parameterName: `/${projectName}/slack/channel/id` },
  ).stringValue

  const slackWorkspaceId = StringParameter.fromStringParameterAttributes(
    stack,
    `parameter-${projectName}-slack-workspace-id`,
    { parameterName: `/${projectName}/slack/workspace/id` },
  ).stringValue
  const slackConfigName = resouceName('Notification', functionName)
  new CfnSlackChannelConfiguration(stack, slackConfigName, {
    configurationName: slackConfigName,
    iamRoleArn: chatbotRole.roleArn,
    snsTopicArns: [topic.topicArn],
    slackChannelId,
    slackWorkspaceId,
  })
}

const resouceName = (resouceName: string, functionName: string) =>
  [resouceName, functionName, 'errors'].join('-')
