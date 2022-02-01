const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Philipp Garbe',
  authorAddress: 'git@garbe.io',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-bootstrap-cleanup',
  repositoryUrl: 'https://github.com/pgarbe/cdk-bootstrap-cleanup.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();