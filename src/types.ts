import yargsParser = require("yargs-parser")

interface CommandInterface {
    name: string[]
    execute: (args: yargsParser.Arguments) => any
}

interface PluginConfig {
    name: string;
    version: string;
    author: string;
    lang: "javascript" | "typescript"
}

export {
    CommandInterface,
    PluginConfig
}