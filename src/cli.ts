#!/usr/bin/env node

// !PACKAGES

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { CommandHandler } from "./CommandsHandler.js";
import yargsParser from "yargs-parser";

// !CLI HANDLER

const argv = hideBin(process.argv);
const args = yargs(argv)
    .help(false)
    .version(false)
        .argv as yargsParser.Arguments;
// !COMMANDS EXECUTE

await CommandHandler.HandleCommand(args);