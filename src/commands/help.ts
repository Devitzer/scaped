import { CommandInterface } from "../types";

//! COMMAND INTERFACE

const help: CommandInterface = {
    name: ["help", "commands"],
    execute: async (args) => {
        console.log("Command List and Functions:")
        console.log("help / commands    -   Self-explanatory. Command list and their functions.")
        console.log("init   -   Initialize a plugin. This makes sure that no issues arise like if it was set up manually.")
        console.log("list   -   A list that shows all the currently installed plugins. If you installed a plugin and it doesn't show up here, you or the plugin creator may have done something wrong.")
    }
}

//! EXPORT OF COMMAND

export default help;