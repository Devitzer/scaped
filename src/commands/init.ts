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

        if (!args._[1]) {
            Errors.scapedError("you did not give a name for your plugin!");
            return;
        } else if (args.typescript) {
            lang = "TypeScript";
        }

        console.log(ansiColors.blue(`initializing your ${lang.toLowerCase()} plugin...`));
        const initTime = Date.now();

        try {
            if (lang == "JavaScript") {
                const JSTemplate = path.dirname(require.resolve("@scaped/javascript-plugin/package.json"));
                const TemplatePath = path.join(JSTemplate, "plugin");
                let PluginPath: string;

                // check if user specified a directory, if no initialize it in current directory
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

                Errors.scapedInfo("initializing an NPM package is good for making your plugin public, just make sure that the name is 'scaped-plugin-(your plugin name)'\n")
                const InitNPM = await prompts({
                    type: "confirm",
                    name: "value",
                    message: "do you want to init an NPM package?",
                    initial: true
                })

                if (InitNPM.value) {
                    console.log("NPM initialization in progress...");
                    process.chdir(PluginPath);
                    const stdout = await Terminal.asyncExecute("npm init -y");
                    Errors.scapedInfo("NPM initialization done! you need to change the values manually.\n");
                }
                
                console.log(ansiColors.blue("plugin creation complete!"))
                const formattedTime = diagnosticFormat(Date.now() - initTime);
                console.log(ansiColors.blue(`completed in ${formattedTime.time}${formattedTime.format}`));
            } else if (lang == "TypeScript") {
                Errors.scapedWarn("typescript plugins are currently being worked on, please use javascript.");
                return;
            }
        } catch (err) {
            Errors.scapedError("something went wrong during creation of your plugin.");
            console.log(err);
        }
    }
}

//! EXPORT OF COMMAND

export default init;