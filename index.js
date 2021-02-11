'use strict';

const core = require('@actions/core');
const parseEnvironmentName = require('./src/parseEnvironmentName');

async function run() {
  try {
    const githubRef = core.getInput('github-ref', { required: true });

    let map = core.getInput('map');
    if (map) {
      map = JSON.parse(map);
    }

    const env = parseEnvironmentName(githubRef, map);
    if (!env) {
      throw new Error('Could not parse environment name');
    }

    core.setOutput('environment', env);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;

if (require.main === module) {
  run();
}
