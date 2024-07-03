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