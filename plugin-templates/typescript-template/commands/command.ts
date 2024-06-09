//! THE COMMAND, STORED IN A VARIABLE

import { CommandInterface } from "scaped/types";

const command: CommandInterface = {
    // Even if you don't want to specify an alias,
    // the strings need to be in an array, or else an error will occur in our plugin handler.
    name: ["hello", "hey"], 
    
    // You don't necessarily need to use args at all if the command is simply one word.
    // Any validation, such as if the args you need exist or not, the validation is up to you.
    // We don't do the validation ourselves for your arguements, if an arguement that you need
    // doesn't show up, you need to validate that, not us. We will potentially implement this into our handler in the future.

    // This is the code that will be executed upon the command being triggered.
    // The function has to take in the arguements from the CLI, even if you don't need them.
    // If you don't need them, you can put it in the parameters and then ignore it.
    execute: async (args) => {
        console.log("Hello World!")
        // Example of validating and handling args:

        if (!args.myArg) {
            console.log("Hey! You didn't define --myArg!");
            return;
        } else if (typeof args.myArg !== "boolean") {
            console.log("Hey! myArg should be a boolean which is true!");
            console.log("Example: scaped plug example-plugin command --myArg");
        }

        console.log(args.myArg, " << my arg be like");
    }
}

//! EXPORT OF COMMAND

export default command;