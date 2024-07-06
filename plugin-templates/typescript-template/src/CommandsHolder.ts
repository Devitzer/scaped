// This file is very easy to make.
// Simply make an array that contains all of your exported commands.
// Please add .js to your TypeScript files, even if it's not a JS file (because our required tsconfig does no support TS imports)
// This is because when compiled, the dist keeps the .ts import, so it doesn't work right.
import command from "./commands/command.js";
import { CommandInterface } from "scaped";

const MyCommands: CommandInterface[] = [
    command
];

// Make sure to export only your commands, or else the Command Handler will fail.

export {
    MyCommands
};