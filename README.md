# GitHub branch mapper

[![Actions Status][1]][2]
![GitHub Super-Linter][7]
[![Public workflows that use this action.][3]][4]
[![Licence][5]][6]

Parses branch name and optionally maps to environment name

```yml
- uses: alexrogalskiy/github-actions/github-action-branch-mapper@master
  with:
    github-ref: ${{ github.ref }}
    map: ${{ toJSON({ dev: 'staging', production: 'production', '.*': 'sandbox' })  }}
```

Outputs:

- `environment` - environment name


Run locally:
- `yarn run_action --action github-ref-to-env --github-ref refs/heads/my/branch-name --map '{ "dev": "staging", ".*": "sandbox" }'`

[1]: https://github.com/AlexRogalskiy/github-action-branch-mapper/workflows/Build/badge.svg
[2]: https://github.com/AlexRogalskiy/github-action-branch-mapper/actions
[3]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-branch-mapper%26badge%3Dtrue
[4]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-branch-mapper+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[5]: https://img.shields.io/github/license/AlexRogalskiy/github-action-branch-mapper
[6]: https://github.com/AlexRogalskiy/github-action-branch-mapper/blob/v3.x/LICENSE
[7]: https://github.com/AlexRogalskiy/github-action-branch-mapper/workflows/Lint/badge.svg
