const semver = require("semver");

// subject to change, this is the minimum requirement from one of our packages
const nodeReq = ">=14.18.0";
const nodeCurrent = process.version;

if (!semver.satisfies(nodeCurrent, nodeReq)) {
    console.error("scaped error:", "you need at least node v14.18.0 to install scaped, you are on", nodeCurrent);
}