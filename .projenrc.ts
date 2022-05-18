import * as pj from 'projen';

const project = new pj.awscdk.AwsCdkConstructLibrary({
  name: 'cdk-bootstrap-cleanup',
  repositoryUrl: 'https://github.com/pgarbe/cdk-bootstrap-cleanup.git',
  defaultReleaseBranch: 'main',
  stability: 'experimental',

  author: 'Philipp Garbe',
  authorAddress: 'git@garbe.io',

  cdkVersion: '2.22.0',
  projenrcTs: true,
});

// Fix issue with prettier (https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60310)
project.package.addField('resolutions', {
  '@types/prettier': '2.6.0',
});

project.synth();