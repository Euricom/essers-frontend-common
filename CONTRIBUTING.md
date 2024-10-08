# Contributing to Essers Design System

Contributions are welcome! You can submit a pull request to fix a bug, implement a feature, or even correct simple documentation typos.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [pnpm](https://pnpm.io/) (see below for installation instructions)
- Windows 11 or MacOS Ventura or higher

### Pnpm installation

With corepack (part of node 16.8.0 and higher) you can enable pnpm as the package manager for the project.

```bash
# enable core pack (disabled by default)
corepack enable pnpm

# update pnpm to latest version
corepack use pnpm@latest
```

For more installation options see [pnpm installation](https://pnpm.io/installation). But using the `corepack` is the easiest and preferred way.

## Quick start

### Setting up

```bash
pnpm install    # install dependencies (for all packages)
pnpm storybook  # run global storybook
```

### Development process

This project uses [changeset](https://github.com/changesets/changesets) to publish packages to NPM. The process involves a series of script commands located in the root `package.json` file to check, change, and publish NPM packages.

Prior to submitting a pull request please follow the following steps.

1. Review and adhere to the standards defined in the [style guide](./STYLE_GUIDE.md).
2. Rebase your branch from `main`.
3. Do your changes
4. Run `pnpm test:ci`
5. Run `pnpm changeset add` to create a changeset for your changes.
6. You can run `pnpm changeset add` multiple times to different changes (feature, bugfix, etc).
7. Commit all changes to your branch. For the commit message, refer to the Git Commit Guidelines below
8. Finally, when submitting your pull request please make the title clear and concise, provide a description of the change, and specify any issues that will be closed.

:::note
If you are addressing multiple issues which are unrelated, consider doing multiple pull requests.
:::

### Release process

**ONLY after approval by application owner**

1. Checkout the PR branch
2. Run `pnpm changeset version`
3. Run `pnpm release`
2. Run `pnpm install`
4. Commit and push
5. Complete the PR

## All commands

```bash
# install dependencies (for all packages)
pnpm install

# build
pnpm build             # all packages
pnpm cleanup           # remove all build artifacts

# format (prettier) all packages (js, css, json, md, mdx)
pnpm format
pnpm format:check      # check only

# lint all packages
pnpm lint
pnpm lint:fix          # fix all possible errors

# changeset
pnpm changeset           # check which files are changed since the last version tags
pnpm changeset add       # create a changeset file
pnpm changeset version   # bump package versions & update changelog.md

# build all & publish all packages to npm registry
pnpm release

# storybook
pnpm storybook            # run ui-react & ui-core storybook
pnpm storybook:build      # run root storybook (link to ui-react, ui-core, etc)
```

## Git Commit Guidelines

See also: <https://conventionalcommits.org/>

You must use following commit message:

```
<type>(<scope>): <subject>
<body>
<footer>
```

`<subject>` is a short (max 72 characters) description of your change. If you need more text use the `<body>`.

Allowed `<type>` styles (Required):

- feat (A new feature)
- fix (A bug fix)
- docs (Documentation only changes)
- style (Formatting, missing semi colons, etc; no code change)
- refactor (A code change that neither fixes a bug nor adds a feature)
- test (adding missing tests, refactoring tests; no production code change)
- chore (Changes to the build process or auxiliary tools)
- revert (Reverts a previous commit)
- wip (Work in progress)

Allowed `<scope>` values (optional):

- `*`,
- `common`,

Message footer (optional):

```
Closes MYAP-234
```


