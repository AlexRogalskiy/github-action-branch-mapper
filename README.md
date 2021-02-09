# GitHub branch mapper

[![GitHub marketplace](https://img.shields.io/badge/marketplace-github--branch-mapper-blue?logo=github)](https://github.com/marketplace/actions/branch-mapper)
<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-branch-mapper)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-branch-mapper)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-branch-mapper?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-branch-mapper)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-branch-mapper)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-branch-mapper)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-branch-mapper)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/github-action-branch-mapper)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-branch-mapper)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-branch-mapper/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-branch-mapper)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-branch-mapper)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-branch-mapper)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-branch-mapper?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-branch-mapper?branch=master/view?branch=master)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][1]
[![Public workflows that use this action.][2]][3]
[![Licence][4]][5]

Parses branch name and optionally maps to environment name

```yml
- uses: alexrogalskiy/github-action-branch-mapper@master
  with:
    github-ref: ${{ github.ref }}
    map: "{ \"dev\": \"staging\", \"production\": \"production\", \".*\": \"sandbox\" }"
```

Outputs:

- `environment` - environment name


Run locally:
- `yarn run_action --action github-ref-to-env --github-ref refs/heads/my/branch-name --map '{ "dev": "staging", ".*": "sandbox" }'`

[1]: https://github.com/AlexRogalskiy/github-action-branch-mapper
[2]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-branch-mapper%26badge%3Dtrue
[3]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-branch-mapper+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[4]: https://img.shields.io/github/license/AlexRogalskiy/github-action-branch-mapper
[5]: https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/v3.x/LICENSE
