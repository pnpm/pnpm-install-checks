# pnpm-install-checks

A package that contains checks that pnpm runs during the installation.

## API

### `.checkEngine(target, currentEngine): Promise<WarningObject>`

Check if node/npm version is supported by the package. If not
supported, an error object is returned.

Error type: `ENOTSUP`

### `.checkPlatform(target): Promise<void>`

Check if OS/Arch is supported by the package.

Error type: `EBADPLATFORM`

### .checkCycle(target, ancestors, cb)
Check for cyclic dependencies.

Error type: `ECYCLE`

### .checkGit(folder, cb)
Check if a folder is a .git folder.

Error type: `EISGIT`
