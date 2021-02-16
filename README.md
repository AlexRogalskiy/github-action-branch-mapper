# _Branch mapper_

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

## _Table of contents_

<!--ts-->
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-branch-mapper" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-branch-mapper" alt="Project updated status" />
    </a>
</p>

Parses branch name and optionally maps to corresponding environment name.

## _Inputs_

### `github-ref`

**Required** GitHub references to parse the current branch from

### `map`

**Optional** Collection of branch name mappings (default **null**)

## _Outputs_

### `environment`

Environment branch name by provided collection of name mappings

## _Examples_

```yml
- name: Branch name mapping
  uses: alexrogalskiy/github-action-branch-mapper@master
  with:
    github-ref: ${{ github.ref }}
    map: '{ "dev": "staging", "production": "production", ".*": "sandbox" }'
```

Running locally:

- `npm run start:action --action github-action-branch-mapper --github-ref refs/heads/my/branch-name --map '{ "dev": "staging", ".*": "sandbox" }'`

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-branch-mapper&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-branch-mapper?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-branch-mapper?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-branch-mapper?style=social)

## _Licensing_

_**Branch mapper**_ is distributed under LGPL version 3 or later,
[[License](https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/master/LICENSE)]. LGPLv3 is
additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Branch mapper**_ is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-branch-mapper?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-branch-mapper)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/github-action-branch-mapper](https://reporoster.com/stars/AlexRogalskiy/github-action-branch-mapper)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/github-action-branch-mapper](https://reporoster.com/forks/AlexRogalskiy/github-action-branch-mapper)][forkers]

[repo]: https://github.com/AlexRogalskiy/github-action-branch-mapper
[tags]: https://github.com/AlexRogalskiy/github-action-branch-mapper/tags
[issues]: https://github.com/AlexRogalskiy/github-action-branch-mapper/issues
[pulls]: https://github.com/AlexRogalskiy/github-action-branch-mapper/pulls
[wiki]: https://github.com/AlexRogalskiy/github-action-branch-mapper/wiki
[stars]: https://github.com/AlexRogalskiy/github-action-branch-mapper/stargazers
[forkers]: https://github.com/AlexRogalskiy/github-action-branch-mapper/network/members
[contributors]: https://github.com/AlexRogalskiy/github-action-branch-mapper/graphs/contributors
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-branch-mapper
[license_content]: https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/master/LICENSE
[total_usages]:
  https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-branch-mapper%26badge%3Dtrue
[search_results]:
  https://github.com/search?o=desc&q=AlexRogalskiy/github-action-branch-mapper+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
