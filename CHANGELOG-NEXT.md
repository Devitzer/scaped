# v0.3.3-next (2024-06-11)

Bug fixes to the preinstall script.

## Bug Fixes

- Preinstall script did not abort installation on execution if the node version was under 14.18.0, due to a missing ``process.exit`` line.
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