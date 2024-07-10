import { getDirname } from "../helpers/vars.js";
import diagnosticFormat from "../helpers/diagnosticFormat.js";
import fse from "fs-extra";
import * as path from "path";
import ora from "ora";
import enquirer from "enquirer";
const { prompt } = enquirer;
import * as Messages from "../helpers/messages.js";
import spawn from "cross-spawn";
const __dirname = getDirname(import.meta.url);
//! COMMAND INTERFACE
const init = {
    name: ["init"],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    execute: async (args) => {
        const questions = await prompt([
            {
                type: "input",
                name: "name",
                message: "What do you want to call your plugin?"
            },
            {
                type: "select",
                name: "lang",
                message: "Which language do you want to use?",
                choices: [
                    "JavaScript",
                    "TypeScript"
                ]
            }
        ]);
        const lang = questions.lang;
        const extension = lang === "TypeScript" ? "ts" : "js";
        const PluginPath = path.join(process.cwd(), `/${questions.name}`);
        await fse.ensureDir(PluginPath);
        Messages.scapedInfo(`initializing your ${lang.toLowerCase()} plugin...`);
        const initTime = Date.now();
        try {
            Messages.scapedInfo("Initializing your plugin configuration...");
            const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", `${lang.toLowerCase()}-template`);
            await fse.copy(TemplatePath, PluginPath);
            const Config = `import { PluginConfiguration } from "scaped";
            
const Config = new PluginConfiguration({
    name: "${questions.name}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "${lang.toLowerCase()}" 
});

export default Config;`;
            await fse.writeFile(path.join(PluginPath, `plugin.config.${extension}`), Config, "utf8");
            Messages.scapedInfo("Initializing an NPM package...");
            const packagejson = `{
    "name": "scaped-plugin-${questions.name}",
    "version": "1.0.0",
    "main": "CommandsHolder.${extension}",
    "scripts": { "test": "echo \\"Error: no test specified\\" && exit 1" },
    "keywords": [],
    "author": "put-your-npm-name-here",
    "license": "ISC",
    "description": ""
}`;
            await fse.writeFile(path.join(PluginPath, "package.json"), packagejson, "utf8");
            process.chdir(PluginPath);
            const spinner = ora("Installing scaped to your package...");
            spinner.color = "red";
            spinner.start();
            // start a spinner and start the npm installation
            const scapedInstallation = spawn("npm", ["i", "scaped"]);
            scapedInstallation.stderr?.on("data", (data) => {
                Messages.scapedError("An error occured:");
                console.error(data);
            });
            // make sure each process runs one by one
            await new Promise((resolve, reject) => {
                scapedInstallation.on("close", (code) => {
                    if (code === 0) {
                        resolve();
                    }
                    else {
                        reject(new Error(`Scaped installation failed with code ${code}`));
                    }
                });
                scapedInstallation.stderr?.on("data", (data) => {
                    Messages.scapedError("An error occured:");
                    console.error(data);
                });
            });
            if (lang === "TypeScript") {
                // typescript stuff that gets installed
                spinner.text = "Installing typescript to your package...";
                const typescriptInstallation = spawn("npm", ["i", "-D", "typescript"]);
                await new Promise((resolve, reject) => {
                    typescriptInstallation.on("close", (code) => {
                        if (code === 0) {
                            resolve();
                        }
                        else {
                            reject(new Error(`Scaped installation failed with code ${code}`));
                        }
                    });
                    typescriptInstallation.stderr?.on("data", (data) => {
                        Messages.scapedError("An error occured:");
                        console.error(data);
                    });
                });
                spinner.text = "Installing @types/node to your package...";
                const typesnodeInstallation = spawn("npm", ["i", "-D", "@types/node"]);
                await new Promise((resolve, reject) => {
                    typesnodeInstallation.on("close", (code) => {
                        if (code === 0) {
                            resolve();
                        }
                        else {
                            reject(new Error(`Scaped installation failed with code ${code}`));
                        }
                    });
                    typesnodeInstallation.stderr?.on("data", (data) => {
                        Messages.scapedError("An error occured:");
                        console.error(data);
                    });
                });
            }
            spinner.stop();
            Messages.scapedInfo("Plugin creation complete!");
            const formattedTime = diagnosticFormat(Date.now() - initTime);
            Messages.scapedInfo(`Completed in ${formattedTime.time}${formattedTime.format}.`);
            if (lang === "TypeScript") {
                Messages.scapedInfo("Use npx tsc to compile your plugin source into a dist folder.");
            }
        }
        catch (err) {
            Messages.scapedError("Something went wrong during creation of your plugin.");
            console.log(err);
        }
    }
};
//! EXPORT OF COMMAND
export default init;
