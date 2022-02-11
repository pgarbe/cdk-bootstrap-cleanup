import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BootstrapCleanupAspect } from '../src';

test('Defaults are correctly set', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  // WHEN
  new cdk.aws_s3_assets.Asset(stack, 'S3Asset', {
    path: 'src',
  });

  cdk.Aspects.of(app).add(new BootstrapCleanupAspect());

  // THEN
  // Repository is created
  const template = Template.fromStack(stack);

  expect(template.toJSON()).toMatchSnapshot();
});