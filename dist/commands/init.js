import { getDirname } from "../helpers/vars.js";
import diagnosticFormat from "../helpers/diagnosticFormat.js";
import fse from "fs-extra";
import * as path from "path";
import * as Messages from "../helpers/messages.js";
import * as Terminal from "../helpers/terminal.js";
const __dirname = getDirname(import.meta.url);
//! COMMAND INTERFACE
const init = {
    name: ["init"],
    execute: async (args) => {
        const lang = args.typescript ? "TypeScript" : "JavaScript";
        const extension = lang === "TypeScript" ? "ts" : "js";
        if (!args._[1]) {
            Messages.scapedError("you did not give a name for your plugin!");
            return;
        }
        if (typeof args._[2] === "number") {
            Messages.scapedError("the directory of your plugin cannot be a number!");
            return;
        }
        const PluginPath = path.join(process.cwd(), args._[2] || "");
        await fse.ensureDir(PluginPath);
        Messages.scapedInfo(`initializing your ${lang.toLowerCase()} plugin...\n`);
        const initTime = Date.now();
        try {
            const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", `${lang.toLowerCase()}-template`);
            await fse.copy(TemplatePath, PluginPath);
            const Config = lang === "JavaScript" ?
                `import { PluginConfiguration } from "scaped";
            
const Config = new PluginConfiguration({
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "javascript" 
});

export default Config;` :
                `import { PluginConfiguration } from "scaped";
            
const Config = new PluginConfiguration({
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "typescript"
});

export default Config;`;
            await fse.writeFile(path.join(PluginPath, `plugin.config.${extension}`), Config, "utf8");
            Messages.scapedInfo("initializing an NPM package...");
            const packagejson = `{
    "name": "scaped-plugin-${args._[1]}",
    "version": "1.0.0",
    "main": "CommandsHolder.${extension}",
    "scripts": { "test": "echo \\"Error: no test specified\\" && exit 1" },
    "keywords": [],
    "author": "put-your-npm-name-here",
    "license": "ISC",
    "description": ""
}`;
            Messages.scapedInfo("NPM initialization in progress...");
            await fse.writeFile(path.join(PluginPath, "package.json"), packagejson, "utf8");
            process.chdir(PluginPath);
            Messages.scapedInfo("installing scaped to your plugin...");
            await Terminal.asyncExecute("npm i scaped@latest");
            Messages.scapedInfo("NPM initialization done!");
            Messages.scapedInfo("plugin creation complete!");
            const formattedTime = diagnosticFormat(Date.now() - initTime);
            Messages.scapedInfo(`completed in ${formattedTime.time}${formattedTime.format}`);
        }
        catch (err) {
            Messages.scapedError("something went wrong during creation of your plugin.");
            console.log(err);
        }
    }
};
//! EXPORT OF COMMAND
export default init;
