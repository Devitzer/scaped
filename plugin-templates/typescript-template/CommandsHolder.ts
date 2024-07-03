// This file is very easy to make.
// Simply make an array that contains all of your exported commands.
import command from "./commands/command";
import { CommandInterface } from "scaped";

const MyCommands: CommandInterface[] = [
    command
];

// Make sure to export only your commands, or else the Command Handler will fail.

export {
    MyCommands
};