# Webaverse Documentation

[https://docs.webaverse.com](https://docs.webaverse.com)

Powered by [Docusaurus](https://docusaurus.io/).

## Developing

```bash
cd website
yarn install
yarn start
```

## Publishing

All change should be made on the `wip` branch with pull requests against `master`.

Please check your changes against the checklist in [CONTRIBUTING.md](https://github.com/webaverse/docs/blob/master/CONTRIBUTING.md) before submitting a pull request.
Use the provided `deploy.sh` or the following commands and environment variables to deploy a new release.

```bash
cd website
yarn install
CURRENT_BRANCH=master USE_SSH=true yarn run publish-gh-pages
```
