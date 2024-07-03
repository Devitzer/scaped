import { satisfies } from "semver";
import { version, exit } from "node:process";
import pc from "picocolors";

// subject to change, 18.0.0 was selected so that we can use ES2022, and we guarantee
// that we will support the earliest LTS version of node, which means this requirement
// will stay at node 18 until April 4th 2025.
const nodeReq = ">=18.0.0";
const nodeReqShow = "v18.0.0";
const nodeCurrent = version;

if (!satisfies(nodeCurrent, nodeReq)) {
    console.error(`${pc.red("scaped error:")} you run on node ${nodeCurrent}, you need to run atleast ${nodeReqShow}`);
    exit(1);
}