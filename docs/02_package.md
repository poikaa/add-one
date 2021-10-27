# NPM module

TODO:

- linter
- tests
- ESM
- TS/docs

Module:

- [NPM](https://www.npmjs.com/package/@ikim23/add-one)
- [`package.json`](../package.json)

```json
{
  "name": "@ikim23/add-one",
  "version": "1.0.0",
  "description": "Increment number",
  "keywords": ["increment"],
  "homepage": "https://github.com/ikim23/add-one#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ikim23/add-one.git"
  },
  "bugs": {
    "url": "https://github.com/ikim23/add-one/issues"
  },
  "publishConfig": {
    "access": "public"
  },
  "license": "MIT",
  "author": "ikim23",
  "main": "dist/index.js",
  "module": "dist/add-one.esm.js",
  "typings": "dist/index.d.ts",
  "files": ["dist", "src"]
}
```

[Next](./03_semver.md)
