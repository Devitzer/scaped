# v0.5.6 (2024-08-02)

Tweaks to the pre-installation script.

## Changed

- Changed the message that the installation script returns.
- The pre-installation script no longer forcefully exits an installation, as this is an aggressive approach.

# v0.5.5 (2024-08-02)

Scaped NPM package size has been optimized severely. ~20kb shaved off.

## Bug Fixes
- Added CHANGELOG related items to .npmignore.
- Added tsconfig.json to .npmignore.

# v0.5.4 (2024-07-31)

Scaped CLI --version flag slight change. README changes.

## Changed

- The --version flag in the CLI returns a slightly different message. <br>
Old: `scaped cli: running version 0.5.4-next` <br>
New: `v0.5.4-next (UNSTABLE VERSION)` <br>
With a Non Next Version: `v0.5.4`
- README.md installation instructions.
- Now being linted with ESLint v9.

# Notice
- Upgrades of development dependencies will no longer be disclosed.
- This means that upgrades will only be announced for the following packages: `cross-spawn`, `enquirer`, `fx-extra`, `ora`, `picocolors`, `semver`, `yargs`, and `yargs-parser`. The list is subject to be outdated in the future.

# v0.5.3 (2024-07-31)

Fixes, upgrades, notices, optimizations. The typical.

## Added

- New command "error/err" in preparation for the new error system.

## Changed

- Changelog Protocol. Updates involving advice and scheduled releases.
- The preinstall validation script has extra comments added to it's file (preinstall-validation.js).

## Bug Fixes

- Fixed Linux bug with init command's "cross-spawn" module. (moved from dev dependencies to regular dependencies)
- Remove the option to use --version flag if you are running a command.
- TypeScript downloads are combined instead of ran seperately.

## Upgrades

- Upgraded `@types/node` from `v20.14.9` to `v22.0.0`.
- Upgraded `rimraf` from `v5.0.7` to `v5.0.9`.
- Upgraded `semver` from `v7.6.2` to `v7.6.3`.
- Upgraded `typescript` from `v5.5.3` to `v5.5.4`.
- Upgraded `typescript-eslint` from `v7.15.0` to `v7.18.0`

## Notices

You can find the relevant notices on versions v0.5.3-next and v0.5.3-next2 [here](./CHANGELOG-NEXT.md)

# v0.5.2 (2024-07-30)

Command fixes, repo fixes.

## Bug Fixes

- Removed package-lock.json from the repo (takes up like 2000 lines), which should've been fixed in v0.4.1
- Added missing text from missing command error.

## Notice

- (was tested in v0.5.2-next on v18.16.1) Our CLI needs testing on Node v18, we have been testing on v22 the whole time, v18 tests will be made and fixes will be made accordingly.
- Linux testing will be done starting 08/01/2024. This is so that we can test on both Unix systems and Windows systems (Windows earns priority for now.)

# v0.5.1 (2024-07-06)

TypeScript Plugin Template v2

## Added

- TypeScript Plugin Templates now feature a predefined `tsconfig.json`, and we install `typescript` and `@types/node` into your project.

## Removed

- src folder from NPM (not GitHub), because it takes up about 10kb.

## Bug Fixes

- Changed `exec` to `spawn`, which is better for executing npm installs in the init command. (yes, it works on Windows.)

## Notices

The TSPT (TypeScript Plugin Template) V2 update has sadly made the init command quite a bit bigger (about 50 lines), because I want to run all of the installations individually (more presentable to the user). I have not decided how to fix it yet. It may actually just be ignored, scaped is in development and this is the time to take up space on updates, to add new features. <br>
Although, the NPM package unpacked size has actually gone down by about 8kb compared to v0.5.0, due to removing the src folder from the NPM package.

# v0.5.0 (2024-07-05)

Initialization is easier than ever.

## Added

- Loading spinners to init command
- Init command now asks questions. No need to include args in the command, simply run `scaped init` and follow the prompts.

## Changed

- Added JSDoc detail to `PluginConfiguration`'s constructor.
- Conversion from `prompts` to `enquirer`
- Added option to the `PluginConfiguration.Validate` command where you can now choose whether not it logs errors or just returns a boolean.

## Notices

- NPM initialization being optional is cancelled for now, it will init one automatically, so just make a directory and init your plugin right away by running `scaped init` instead of `npm init`
- The new error system mentioned on GitHub is pushed back to a later update (potentially v0.6.0)

# v0.4.1 (2024-07-03)

GitHub repo fixes. Changes to the Changelog Protocol.

## Changed

- Changelog Protocol now includes detail.

## Removed

- node_modules folder is now gone (waste of space on the repo)

# v0.4.0 (2024-07-03)

A new way to configure your plugin.

## Added

- `PluginConfiguration` class: Create and export your configuration easily.

```js
new PluginConfiguration({
    // config goes here, our handler validates it
})
```
It's that easy. No large changes are required to change your plugin config.
- ESLint was added to the Scaped project.
- Full conversion to ESM. Please use it primarily in your project.

## Changed

- The required node version has increased to v18. It may increase a little bit but not over v18 until April 4th 2025. This is because we have converted to ES2022.
- We have changed our colors from ansi-colors to picocolors.
- Some visual changes to the init command.

## Bug Fixes

- The `init` command has been optimized from 157 to 96 lines, retaining the same functionality. I am aware that lower lines does not mean more optimized, but the reason the lines are reduced is because of the optimizations. It's to show scale.
- Fixed TypeScript declarations in [types.d.ts](./types.d.ts).
- Removal of uneccesary "scaped/types" in the TypeScript template. It is now just "scaped"

## Updates

Dependency updates.

- Upgrade `typescript` from `v5.4.5` to `v5.5.3`
- Upgrade `@types/node` from `v20.14.2` to `v20.14.9`
- Removed `prompts` and it's types, in preparation for a conversion to enquirer.

# v0.3.3 (2024-06-11)

Bug fixes to the preinstall script.

## Bug Fixes

- Preinstall script did not abort installation on execution if the node version was under 14.18.0, due to a missing ``process.exit`` line.
- A changelog line was misadressed, on the v0.3.2 changelog, there is an incorrect line saying you need at least node 16 to install Scaped, when it was truly that you need at least node 14.18.0.

# v0.3.2 (2024-06-11)

Fixes regarding node versions required to install our package.

## Added

- Semver package, for both the reasons below and for assigned future use cases.

## Bug Fixes

- Generosity regarding node version required for using Scaped. Minimum requirement moved from v18 to v16 (this is the lowest we can go without creating conflict with our dependencies)
- New way of validating node version. If you don't have atleast node v16, the install will abort. v16 was chosen because it is the lowest

# v0.3.1 (2024-06-10)

Simple additions are added to this version of Scaped.

## Added

- Introduction to the "next" category. Instead of releasing potential unstable releases to the latest tag, we can test them instead on the next tag. You could use this as a beta, but it has a potential to have some features not working. You can find the changelog for it [here](./CHANGELOG-NEXT.md)
- Workflow included with it.

## Changed

- Publish workflow, only activates upon a release publish. This allows for more stability.

# v0.3.0 (2024-06-08)

## Added

- TypeScript plugins are now in their experimental stage. They may not function properly.
- You can initialize TypeScript plugins now. (scaped init myPlugin --typescript)

## Changed

- Further updates to init command, now installs scaped by default into your project if you initialize a package.json.

## Bug Fixes

- All messages and errors from every conmmand is converted to our messages system.
- Removed unnecessary packages.
- Updated it so that you need atleast Node 18 to download Scaped.

# v0.2.0 (2024-06-08)

## Changed

- Init command, it should now work properly without issues.

## Removed

- shelljs, we weren't using it and it was causing unnecessary security vulnerabilities.

# v0.1.4 (2024-06-08)

## Bug Fixes

- Fixed use of the init command globally.

# v0.1.3 (2024-06-08)

**NOTE: THIS UPDATE DOES NOT AFFECT THE NPM PACKAGE IN ANY WAY, INSTALLING IT IS NOT NECESSARY**

## Bug Fixes

- Made it so that the Github Workflow will not activate on tag creation, because I don't want it to.

# v0.1.2 (2024-06-08)

## Added
- You can find the Scaped CLI version by running scaped -v or scaped --version.
- Experimental type declarations for TypeScript plugins.

## Bug Fixes

- Installing scaped as a CLI should work now (forgot to add a shebang line)
- Small updates to our tsconfig.
- All errors were converted to scaped errors.
- Some adjustments to our init command.
- Some adjustments to the changelog.
- Fixes to the default commands handler.

# v0.1.1 (2024-06-08)

## Bug Fixes

Final tests with Github Actions (this took 11 tests)

# v0.1.0

## Added

The changelog!
Experiment with Github Actions
Experiment with type declarations (for TypeScript plugins)

## Fixed

Incorrect registry link in Github Actions