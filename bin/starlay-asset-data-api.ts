#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StarlayAssetDataApiStack } from '../lib/starlay-asset-data-api-stack';
import { StarlayMonitorStack } from '../lib/monitor-stack';

const app = new cdk.App();
new StarlayAssetDataApiStack(app, 'StarlayAssetDataApiStack', {});
new StarlayMonitorStack(app, 'StarlayMonitorStack', {});
