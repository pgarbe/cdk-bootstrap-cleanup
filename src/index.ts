import * as cdk from 'aws-cdk-lib';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct, IConstruct } from 'constructs';

export interface BootstrapCleanupProps {

  readonly bucket: string;
  readonly key: string;
}

/**
 * Construct to clean up a given asset
 */
export class BootstrapCleanup extends Construct {
  /**
   *
   */
  constructor(scope: Construct, id: string, props: BootstrapCleanupProps) {
    super(scope, id);

    new cdk.custom_resources.AwsCustomResource(this, 'Cleanup', {
      installLatestAwsSdk: false,
      onUpdate: {
        service: 'STS',
        action: 'getCallerIdentity',
        physicalResourceId: cr.PhysicalResourceId.of(`${props.bucket}/${props.key}`), // Update physical id to always fetch the latest version
      },
      onDelete: {
        service: 'S3',
        action: 'deleteObject',
        parameters: {
          Bucket: props.bucket,
          Key: props.key,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
        resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    });
  }
}

export class BootstrapCleanupAspect implements cdk.IAspect {

  visit(node: IConstruct): void {
    if (node instanceof cdk.aws_s3_assets.Asset) {
      new BootstrapCleanup(node, `${node.node.id}-cleanup`, { bucket: node.s3BucketName, key: node.s3ObjectKey });
    }
  }
}
