// This file is very easy to make.
// Simply make an array that contains all of your exported commands.
// You could create a command handler, or import them all individually, whatever you like.
// As long as commands are being exported.
import command from "./commands/command";

const MyCommands = [
    command
];

// Make sure to export only your commands, or else the Command Handler will fail.

export {
    MyCommands
};