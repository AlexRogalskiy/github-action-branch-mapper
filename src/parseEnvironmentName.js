'use strict';

const parseBranch = ref => {
  const regex = /refs\/(heads|tags)\/(\S*)/;
  const match = ref.match(regex);

  if (match) {
    return match[2];
  }
};

const parseEnvironmentName = (githubRef, map) => {
  const env = parseBranch(githubRef);

  if (map) {
    // we intentionally do sort reverse to push capture everything key `.*` to end
    const keys = Object.keys(map).sort().reverse();
    const mappedName = keys.find(name => {
      const regex = new RegExp(name);
      return regex.test(env);
    });

    return map[mappedName];
  }

  return env;
};

module.exports = parseEnvironmentName;
