import * as pj from 'projen';

const project = new pj.awscdk.AwsCdkConstructLibrary({
  name: 'cdk-bootstrap-cleanup',
  repositoryUrl: 'https://github.com/pgarbe/cdk-bootstrap-cleanup.git',
  defaultReleaseBranch: 'main',
  stability: 'experimental',

  author: 'Philipp Garbe',
  authorAddress: 'git@garbe.io',

  cdkVersion: '2.90.0',
  jsiiVersion: '~5.0.0',
  projenrcTs: true,
});

project.synth();
