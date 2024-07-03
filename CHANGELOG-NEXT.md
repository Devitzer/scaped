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