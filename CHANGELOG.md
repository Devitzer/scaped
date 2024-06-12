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