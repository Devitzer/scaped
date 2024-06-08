// !PACKAGES

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { CommandHandler } from "./CommandsHandler";
import yargsParser from "yargs-parser";

// !CLI HANDLER

const argv = hideBin(process.argv)
const args = yargs(argv)
    .help(false)
    .version(false)
        .argv as yargsParser.Arguments;
// !COMMANDS EXECUTE

async function main() {
    await CommandHandler.HandleCommand(args);
}

main();

// ^^ ye thats about it most of the handling is in ./Commands