import { CommandInterface } from "../scaped.js";
import { scapedError, scapedInfo } from "../helpers/messages.js";

//! COMMAND INTERFACE

const error: CommandInterface = {
    name: ["error", "err"],
    execute: async (args) => {
        if (typeof args._[1] !== "number") {
            scapedError("Error code argument must be a number.");
            return;
        } 

        switch (args._[1]) {
            case 1:
                scapedInfo("You entered an invalid argument on a certain command. Refer to the command's documentation for help.");
                break;
            case 2:
                scapedInfo("One of the arguments you've entered has an incorrect type. The error usually adds on with information.");
                break;
            default:
                scapedError("Invalid error code.");
                break;
        }
    },
}

export default error;