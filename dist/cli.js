#!/usr/bin/env node
// !PACKAGES
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { CommandHandler } from "./CommandsHandler.js";
// !CLI HANDLER
const argv = hideBin(process.argv);
const args = yargs(argv)
    .help(false)
    .version(false)
    .argv;
// !COMMANDS EXECUTE
await CommandHandler.HandleCommand(args);
