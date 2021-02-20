'use strict';

const core = require('@actions/core');
const parseEnvironmentName = require('./src/parseEnvironmentName');

async function getEnvironment(githubRef, map) {
  const env = parseEnvironmentName(githubRef, map);
  if (!env) {
    throw new Error('Could not parse environment name');
  }

  return env;
}

async function getMappings(mappings) {
  let result = {};
  if (mappings) {
    result = JSON.parse(mappings);
  }

  return result;
}

async function run() {
  const githubRef = core.getInput('github-ref', { required: true });
  const map = core.getInput('map');

  try {
    const mappings = await getMappings(map);
    const environment = await getEnvironment(githubRef, mappings);

    core.info(`Setup environment name: ${environment} by mappings: ${mappings}`);
    core.setOutput('environment', environment);
  } catch (e) {
    core.setFailed(
      `Cannot setup env name by ref context: ${githubRef} and map: ${map}, message: ${e.message}`
    );
  }
}

module.exports = run;

if (require.main === module) {
  run();
}
