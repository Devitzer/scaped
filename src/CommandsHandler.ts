//! IMPORT DEFAULT COMMANDS | this is as an assurance, so I know that they will work. Plugins will be imported somewhat dynamically.

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packagejson = require("../package.json");

import help from "./commands/help.js";
import init from "./commands/init.js";
import yargsParser from "yargs-parser";
import * as Messages from "./helpers/messages.js";
import pc from "picocolors";

//! IMPORT ERRORS


async function HandleCommand(args: yargsParser.Arguments) {
    //! COMMAND IS STRING VALIDATION

    if (args._[0]) {
        if (typeof args._[0] !== "string") {
            Messages.scapedError("you cannot use a number as a command!")
            return;
        }
    } else {
        args._[0] = "";
    }

    if (help.name.includes(args._[0])) {
        await help.execute(args);
    } else if (init.name.includes(args._[0])) {
        await init.execute(args);
    } else if (args.v || args.version) {
        console.log(pc.red("scaped cli:"), "running version", packagejson.version);
    } else {
        Messages.scapedWarn(`the command "${args._[0]}"`)
    }
}

const CommandHandler = {
    HandleCommand: HandleCommand
}
export {
    CommandHandler
}