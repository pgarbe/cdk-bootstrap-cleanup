import * as cdk from 'aws-cdk-lib';
import { Aspects } from 'aws-cdk-lib';
import { BootstrapCleanupAspect } from '../src';


const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new cdk.aws_s3_assets.Asset(stack, 'S3Asset', {
  path: 'src',
});

Aspects.of(app).add(new BootstrapCleanupAspect());
app.synth();

// const template = Template.fromStack(stack);
// expect(template).toMatchSnapshot();


// Use cases:
// - new resource -> nothing
// - update resource -> require new resource
// - delete resource -> delete asset
// - should work with prefixes (on asset and bootstrap-level)
