# Branch name mapper

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub--branch-mapper-blue?logo=github)](https://github.com/marketplace/actions/branch-mapper)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/15928/branches/326928/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=15928&bid=326928)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-branch-mapper)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-branch-mapper)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-branch-mapper?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-branch-mapper)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-branch-mapper)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-branch-mapper)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-branch-mapper)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-branch-mapper)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-branch-mapper/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-branch-mapper)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-branch-mapper)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-branch-mapper)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-branch-mapper?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-branch-mapper?branch=master/view?branch=master)
![CI](https://github.com/AlexRogalskiy/github-action-branch-mapper/workflows/CI/badge.svg)

<!--[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-branch-mapper/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexRogalskiy/github-action-branch-mapper)-->

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

## Description

Parses branch name and optionally maps to corresponding environment name.

## Inputs

### `github-ref`

**Required** GitHub references to parse the current branch from

### `map`

**Optional** Collection of branch name mappings (default **null**)

## Outputs

### `environment`

Environment branch name by provided collection of name mappings

## Examples

```yml
- name: Branch name mapping
  uses: alexrogalskiy/github-action-branch-mapper@master
  with:
    github-ref: ${{ github.ref }}
    map: '{ "dev": "staging", "production": "production", ".*": "sandbox" }'
```

## <img src="https://user-images.githubusercontent.com/18126719/56791599-0868f980-683a-11e9-8a8b-134ced040c8e.png" width="30"> _Star Gazers_

[![Stargazers repo roster for @AlexRogalskiy/github-action-branch-mapper](https://reporoster.com/stars/AlexRogalskiy/github-action-branch-mapper)](https://github.com/AlexRogalskiy/github-action-branch-mapper/stargazers)

## <img src="https://ghost.org/images/docs/setup/fork.gif" width="30"> _Forkers_

[![Forkers repo roster for @AlexRogalskiy/github-action-branch-mapper](https://reporoster.com/forks/AlexRogalskiy/github-action-branch-mapper)](https://github.com/AlexRogalskiy/github-action-branch-mapper/network/members)

[repo]: https://github.com/AlexRogalskiy/github-action-branch-mapper
[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-branch-mapper%26badge%3Dtrue
[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-branch-mapper+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-branch-mapper
[license_content]: https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/master/LICENSE
