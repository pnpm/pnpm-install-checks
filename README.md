# pnpm-install-checks

> checks that pnpm runs during the installation of a module

[![npm version](https://img.shields.io/npm/v/pnpm-install-checks.svg?style=flat-square)](https://www.npmjs.com/package/pnpm-install-checks)
[![Build Status](https://img.shields.io/travis/zkochan/pnpm-install-checks/master.svg?style=flat-square)](https://travis-ci.org/zkochan/pnpm-install-checks)

## API

### `.checkEngine(target, currentEngine): Promise<Error>`

Check if node/npm version is supported by the package. If not
supported, an error object is returned.

Error type: `ENOTSUP`

### `.checkPlatform(target): Promise<Error>`

Check if OS/Arch is supported by the package.

Error type: `EBADPLATFORM`

### `.checkCycle(target, ancestors, cb)`
Check for cyclic dependencies.

Error type: `ECYCLE`

### `.checkGit(folder, cb)`
Check if a folder is a .git folder.

Error type: `EISGIT`

## License

[BSD](LICENSE)
