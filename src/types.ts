import yargsParser = require("yargs-parser")

interface CommandInterface {
    name: string[]
    execute: (args: yargsParser.Arguments) => any
}

export {
    CommandInterface
}