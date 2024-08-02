// this script will return some kind of error if not run from atleast node v12.20.0. a fix is being implemented in v0.5.7

import { satisfies } from "semver";
import { version } from "node:process";
import pc from "picocolors";

// subject to change, 18.0.0 was selected so that we can use ES2022, and we guarantee
// that we will support the earliest LTS version of node, which means this requirement
// will stay at node 18 until April 4th 2025.
// we also recommend that you use the latest version of node 18 or in general when possible.
// this will ensure full compatibility with scaped.
const nodeReq = ">=18.0.0";
const nodeReqShow = "v18.0.0";
const nodeCurrent = version;

if (!satisfies(nodeCurrent, nodeReq)) {
    console.error(`You run on Node ${nodeCurrent}, we highly suggest you run atleast ${nodeReqShow} and up.`);
    console.log(pc.red(`Scaped Support Policy: ANY VERSION BELOW OUR RECOMMENDED NODE VERSION WILL NOT RECIEVE BUG FIXES.\nIf you encounter a bug on a version below ${nodeReqShow}, we will not assist you. If the bug is proven to still occur on versions above this, we will look into it.`));
}