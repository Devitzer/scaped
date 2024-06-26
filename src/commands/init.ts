import { CommandInterface } from "../types";
import diagnosticFormat from "../helpers/diagnosticFormat";
import ansiColors from "ansi-colors";
import prompts from "prompts";

import * as fse from "fs-extra";
import * as path from "path";
import * as Errors from "../helpers/messages";
import * as Terminal from "../helpers/terminal";

//! COMMAND INTERFACE

const init: CommandInterface = {
    name: ["init"],
    execute: async (args) => {
        let lang: "JavaScript" | "TypeScript" = "JavaScript"
        let PluginPath: string;

        if (!args._[1]) {
            Errors.scapedError("you did not give a name for your plugin!");
            return;
        } else if (args.typescript) {
            lang = "TypeScript";
        }

        if (args._[2]) {
            if (typeof args._[2] == "number") {
                Errors.scapedError("your plugin directory cannot be a number!");
                return;
            }
            const finalDir = path.join(process.cwd(), args._[2]);

            await fse.ensureDir(finalDir);

            PluginPath = finalDir;
        } else {
            const finalDir = process.cwd();
            PluginPath = finalDir;
        }

        Errors.scapedInfo(`initializing your ${lang.toLowerCase()} plugin...\n`);
        const initTime = Date.now();

        try {
            if (lang == "JavaScript") {
                const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", "javascript-template");

                // check if user specified a directory, if no initialize it in current directory

                await fse.copy(TemplatePath, PluginPath);
                const Config = `const Config = {
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "javascript" // This shouldn't be necessary to change unless you are converting your plugin from one to another.
}

// don't change the default export, name of the default export can be changed
export default Config;`
                await fse.writeFile(PluginPath + "/plugin.config.js", Config, "utf8");

                Errors.scapedInfo("initializing an NPM package is good for making your plugin public. do not remove the 'scaped-plugin-' prefix if you are.");
                const InitNPM = await prompts({
                    type: "confirm",
                    name: "value",
                    message: "do you want to init an NPM package?",
                    initial: true
                })

                if (InitNPM.value) {
                    const packagejson = `{
  "name": "scaped-plugin-${args._[1]}",
  "version": "1.0.0",
  "main": "CommandsHolder.js",
  "scripts": {
    "test": "echo \\\"Error: no test specified\\\" && exit 1"
  },
  "keywords": [],
  "author": "put-your-npm-name-here",
  "license": "ISC",
  "description": ""
}
`
                    Errors.scapedInfo("\nNPM initialization in progress...");
                    await fse.writeFile(PluginPath + "/package.json", packagejson, "utf8");
                    process.chdir(PluginPath);
                    Errors.scapedInfo("installing scaped to your plugin...");
                    await Terminal.asyncExecute("npm i scaped@latest");
                    Errors.scapedInfo("NPM initialization done!\n");
                }
                
                Errors.scapedInfo("plugin creation complete!");
                const formattedTime = diagnosticFormat(Date.now() - initTime);
                Errors.scapedInfo(`completed in ${formattedTime.time}${formattedTime.format}`);
            } else if (lang == "TypeScript") {
                const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", "typescript-template");

                // check if user specified a directory, if no initialize it in current directory

                await fse.copy(TemplatePath, PluginPath);
                const Config = `import { PluginConfig } from "scaped/types"
                
const Config: PluginConfig = {
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "typescript" // This shouldn't be necessary to change unless you are converting your plugin from one to another.
}

// don't change the default export, name of the default export can be changed
export default Config;`
                await fse.writeFile(PluginPath + "/plugin.config.ts", Config, "utf8");

                Errors.scapedInfo("initializing an NPM package is good for making your plugin public. do not remove the 'scaped-plugin-' prefix if you are.");
                const InitNPM = await prompts({
                    type: "confirm",
                    name: "value",
                    message: "do you want to init an NPM package?",
                    initial: true
                })

                if (InitNPM.value) {
                    const packagejson = `{
  "name": "scaped-plugin-${args._[1]}",
  "version": "1.0.0",
  "main": "CommandsHolder.js",
  "scripts": {
    "test": "echo \\\"Error: no test specified\\\" && exit 1"
  },
  "keywords": [],
  "author": "put-your-npm-name-here",
  "license": "ISC",
  "description": ""
}
`
                    Errors.scapedInfo("NPM initialization in progress...");
                    await fse.writeFile(PluginPath + "/package.json", packagejson, "utf8");
                    process.chdir(PluginPath);
                    Errors.scapedInfo("installing scaped to your plugin...");
                    await Terminal.asyncExecute("npm i scaped@latest");
                    Errors.scapedInfo("NPM initialization done!\n");
                }
                
                Errors.scapedInfo("plugin creation complete!");
                const formattedTime = diagnosticFormat(Date.now() - initTime);
                Errors.scapedInfo(`completed in ${formattedTime.time}${formattedTime.format}`);
            }
        } catch (err) {
            Errors.scapedError("something went wrong during creation of your plugin.");
            console.log(err);
        }
    }
}

//! EXPORT OF COMMAND

export default init;