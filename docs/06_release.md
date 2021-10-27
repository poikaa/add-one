# Releasing the module

## [Semantic-Release](https://semantic-release.gitbook.io/semantic-release/)

> **semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

- [Reselase notes](https://github.com/ikim23/add-one/releases/tag/v1.0.0)
- [CHANGELOG](../CHANGELOG.md)
- [Releasing on distribution channels](https://github.com/semantic-release/semantic-release/blob/7faa7993eb10987eef6b34473d6b391dfed276b1/docs/recipes/distribution-channels.md#publishing-on-distribution-channels)
- [Pre-relases](https://github.com/semantic-release/semantic-release/blob/7faa7993eb10987eef6b34473d6b391dfed276b1/docs/recipes/pre-releases.md#publishing-pre-releases)

### [Angular commit messages](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)

```
<type>(<scope>): <subject>

<message body>

<message footer>
```

Each commit message consists of:

- header
  - type
    - CHANGELOG: `feat`, `fix`, `perf`
    - non-CHANGELOG: `build`, `ci`, `docs`, `style`, `refactor`, `test`
  - scope
  - subject
- body
- footer

### Tools

- [Commitizen](https://github.com/commitizen/cz-cli)
- [Commitlint](https://github.com/conventional-changelog/commitlint)

[Next](./07_github.md)
