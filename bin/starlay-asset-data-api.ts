#!/usr/bin/env node
import * as cdk from '@aws-cdk/core'
import 'source-map-support/register'
import { StarlayMonitorStack } from '../lib/monitor-stack'
import { StarlayAssetDataApiStack } from '../lib/starlay-asset-data-api-stack'

const app = new cdk.App()
new StarlayAssetDataApiStack(app, 'StarlayAssetDataApiStack', {})
new StarlayMonitorStack(app, 'StarlayMonitorStack', {})
