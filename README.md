# CDK Bootstrap Cleanup

Status: EXPERIMENTAL

Removes objects from the shard CDK Bootstrap backup when they are not used.

This happens as part of the Stack update or delete operation. A custom resource is created for each asset. Whenever it gets changed the custom resource gets updated and CloudFormation will delete the object in its cleanup phase. 

When the asset is not used anymore, also the custom resources gets deleted and the object will be deleted in the CloudFormation cleanup phase.


## Open issues
- [] Support permanent delete (at the moment only a delete marker is set)
- [] Support cross-stack scenarios
- [] custom resource should have log retention


## Other projects
...