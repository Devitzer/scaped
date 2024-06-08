import yargs from "yargs";

//! IMPORT DEFAULT COMMANDS | this is as an assurance, so I know that they will work. Plugins will be imported somewhat dynamically.

import help from "./commands/help";
import init from "./commands/init";
import yargsParser from "yargs-parser";

//! IMPORT ERRORS


async function HandleCommand(args: yargsParser.Arguments) {
    //! COMMAND IS STRING VALIDATION

    if (typeof args._[0] !== "string") {
        throw new Error("You cannot use a number as a command!");
    }

    if (help.name.includes(args._[0])) {
        await help.execute(args);
    } else if (init.name.includes(args._[0])) {
        await init.execute(args);
    } else {
        console.log("The command \"", args._[0], "\" does not exist!");
    }
}

const CommandHandler = {
    HandleCommand: HandleCommand
}
export {
    CommandHandler
}