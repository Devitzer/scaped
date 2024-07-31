# v0.5.5-next (2024-07-31)

Make NPM package about 500 byte smaller.

## Bug Fixes

- Add tsconfig.json to .npmignore.

# v0.5.4-next2 (2024-07-31)

Small tweak to the v0.5.4-next changelog.

## Bug Fixes

- Incorrect v0.5.4-next date on the changelog. (said 2024-07-29 rather than 2024-07-31)

# v0.5.4-next (2024-07-31)

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

# v0.5.3-next2 (2024-07-29)

Bug fixes, upgrades, notices.

## Added

- New command "error/err" in preparation for the new error system.

## Changed

- Changelog Protocol. Updates involving advice and scheduled releases.
- The preinstall validation script has extra comments added to it's file (preinstall-validation.js).

## Bug Fixes

- Fixed Linux bug with init command's "cross-spawn" module. (moved from dev dependencies to regular dependencies)
- Remove the option to use --version flag if you are running a command.

## Upgrades

- Upgrade `@types/node` from `v20.14.12` to `v22.0.0`.
- Upgrade `typescript-eslint` from `v7.17.0` to `v7.18.0`.

## Notice

I would like to elaborate more on the hiatus. More time has come up on our schedule and thus more work will be done on Scaped. A plugin handler will not be made until the hiatus end date, but developments and testing will be done. Work will recommence in this order:
- Fix bugs
- Make an error system, using codes rather than messages. A new command may be used to look up what the code means. Here is an example of the command `scaped (err|error) [code]`

# v0.5.3-next (2024-07-27)

Init command optimization.

## Bug Fixes

- TypeScript downloads are combined instead of ran seperately.

## Upgrades

- Upgraded `@types/node` from `v20.14.9` to `v20.14.12`.
- Upgraded `rimraf` from `v5.0.7` to `v5.0.9`.
- Upgraded `semver` from `v7.6.2` to `v7.6.3`.
- Upgraded `typescript` from `v5.5.3` to `v5.5.4`.
- Upgraded `typescript-eslint` from `v7.15.0` to `v7.17.0`

## Notice

Scaped is on a development hiatus, I'm focusing on another project currently, I guarantee that work will continue on Scaped by 2024-08-20. <br>
The first thing that will happen upon return is testing both v0.5.2-next and v0.5.3-next and releasing both those versions to the main branch ASAP. Queued up next versions are a priority to fix.
- Linux testing is prepared, and will be pushed back to this hiatus date. There is also a known issue where the init command does not work correctly (issue with the cross-spawn dependency) with Linux.
- The CLI has been tested on v18 and should be good to go.

# v0.5.2-next (2024-07-10)

Command fixes, repo fixes.

## Bug Fixes

- Removed package-lock.json from the repo (takes up like 2000 lines), which should've been fixed in v0.4.1
- Added missing text from missing command error.

## Notice

- Our CLI needs testing on Node v18, we have been testing on v22 the whole time, v18 tests will be made and fixes will be made accordingly.
- Linux testing will be done starting 08/01/2024. This is so that we can test on both Unix systems and Windows systems (Windows earns priority for now.)

# v0.5.1-next2 (2024-07-06)

Fixes to .npmignore.

## Bug Fixes

- .npmignore was ignoring ALL folders that were named "src", when it was only meant to block the src root file. This should be fixed now.

# v0.5.1-next (2024-07-05)

TypeScript Plugin Template v2

## Added

- TypeScript Plugin Templates now feature a predefined `tsconfig.json`, and we install `typescript` and `@types/node` into your project.

## Removed

- src folder from NPM (not GitHub), because it takes up about 10kb.

## Bug Fixes

- Changed `exec` to `spawn`, which is better for executing npm installs in the init command.

## Notices

The TSPT (TypeScript Plugin Template) V2 update has sadly made the init command quite a bit bigger (about 50 lines), because I want to run all of the installations individually (more presentable to the user). I have not decided how to fix it yet. It may actually just be ignored, scaped is in development and this is the time to take up space on updates, to add new features.

# v0.5.0-next3 (2024-07-04)

Changelog fixes for v0.5.0-next2, type declaration updates.

## Changed

- Type declarations to include the new "log" arguement for the `PluginConfiguration` class
- Changelog at version v0.5.0-next2, specifically incorrect version number, and date.

# v0.5.0-next2 (2024-07-04)

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

# v0.4.1-next2 (2024-07-03)

Changes to Changelog protocol.

# v0.4.1-next (2024-07-03)

GitHub repo fixes.

## Removed

- node_modules folder is now gone (waste of space on the repo)

# v0.4.0-next (2024-07-02)

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

# v0.3.3-next (2024-06-11)

Bug fixes to the preinstall script.

## Bug Fixes

- Preinstall script did not abort installation on execution if the node version was under 14.18.0, due to a missing `process.exit` line.
- A changelog line was misadressed, on the v0.3.2 changelog, there is an incorrect line saying you need at least node 16 to install Scaped, when it was truly that you need at least node 14.18.0.

# v0.3.2-next (2024-06-11)

Fixes regarding node versions required to install our package.

## Added

- Semver package, for both the reasons below and for assigned future use cases.

## Bug Fixes

- Generosity regarding node version required for using Scaped. Minimum requirement moved from v18 to v16 (this is the lowest we can go without creating conflict with our dependencies)
- New way of validating node version. If you don't have atleast node v16, the install will abort. v16 was chosen because it is the lowest 

# v0.3.1-next (2024-06-10)

This is simply a test of the next tag. This is test 1.

# v0.3.1 (2024-06-10)

## Added

- Next tag.