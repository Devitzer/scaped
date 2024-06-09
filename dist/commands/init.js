"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnosticFormat_1 = __importDefault(require("../helpers/diagnosticFormat"));
const prompts_1 = __importDefault(require("prompts"));
const fse = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const Errors = __importStar(require("../helpers/messages"));
const Terminal = __importStar(require("../helpers/terminal"));
//! COMMAND INTERFACE
const init = {
    name: ["init"],
    execute: (args) => __awaiter(void 0, void 0, void 0, function* () {
        let lang = "JavaScript";
        let PluginPath;
        if (!args._[1]) {
            Errors.scapedError("you did not give a name for your plugin!");
            return;
        }
        else if (args.typescript) {
            lang = "TypeScript";
        }
        if (args._[2]) {
            if (typeof args._[2] == "number") {
                Errors.scapedError("your plugin directory cannot be a number!");
                return;
            }
            const finalDir = path.join(process.cwd(), args._[2]);
            yield fse.ensureDir(finalDir);
            PluginPath = finalDir;
        }
        else {
            const finalDir = process.cwd();
            PluginPath = finalDir;
        }
        Errors.scapedInfo(`initializing your ${lang.toLowerCase()} plugin...\n`);
        const initTime = Date.now();
        try {
            if (lang == "JavaScript") {
                const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", "javascript-template");
                // check if user specified a directory, if no initialize it in current directory
                yield fse.copy(TemplatePath, PluginPath);
                const Config = `const Config = {
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "javascript" // This shouldn't be necessary to change unless you are converting your plugin from one to another.
}

// don't change the default export, name of the default export can be changed
export default Config;`;
                yield fse.writeFile(PluginPath + "/plugin.config.js", Config, "utf8");
                Errors.scapedInfo("initializing an NPM package is good for making your plugin public. do not remove the 'scaped-plugin-' prefix if you are.");
                const InitNPM = yield (0, prompts_1.default)({
                    type: "confirm",
                    name: "value",
                    message: "do you want to init an NPM package?",
                    initial: true
                });
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
`;
                    Errors.scapedInfo("\nNPM initialization in progress...");
                    yield fse.writeFile(PluginPath + "/package.json", packagejson, "utf8");
                    process.chdir(PluginPath);
                    Errors.scapedInfo("installing scaped to your plugin...");
                    yield Terminal.asyncExecute("npm i scaped@latest");
                    Errors.scapedInfo("NPM initialization done!\n");
                }
                Errors.scapedInfo("plugin creation complete!");
                const formattedTime = (0, diagnosticFormat_1.default)(Date.now() - initTime);
                Errors.scapedInfo(`completed in ${formattedTime.time}${formattedTime.format}`);
            }
            else if (lang == "TypeScript") {
                const TemplatePath = path.join(__dirname, "..", "..", "plugin-templates", "typescript-template");
                // check if user specified a directory, if no initialize it in current directory
                yield fse.copy(TemplatePath, PluginPath);
                const Config = `import { PluginConfig } from "scaped/types"
                
const Config: PluginConfig = {
    name: "${args._[1]}",
    version: "1.0.0",
    author: "put-your-name-here",
    lang: "typescript" // This shouldn't be necessary to change unless you are converting your plugin from one to another.
}

// don't change the default export, name of the default export can be changed
export default Config;`;
                yield fse.writeFile(PluginPath + "/plugin.config.ts", Config, "utf8");
                Errors.scapedInfo("initializing an NPM package is good for making your plugin public. do not remove the 'scaped-plugin-' prefix if you are.");
                const InitNPM = yield (0, prompts_1.default)({
                    type: "confirm",
                    name: "value",
                    message: "do you want to init an NPM package?",
                    initial: true
                });
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
`;
                    Errors.scapedInfo("NPM initialization in progress...");
                    yield fse.writeFile(PluginPath + "/package.json", packagejson, "utf8");
                    process.chdir(PluginPath);
                    Errors.scapedInfo("installing scaped to your plugin...");
                    yield Terminal.asyncExecute("npm i scaped@latest");
                    Errors.scapedInfo("NPM initialization done!\n");
                }
                Errors.scapedInfo("plugin creation complete!");
                const formattedTime = (0, diagnosticFormat_1.default)(Date.now() - initTime);
                Errors.scapedInfo(`completed in ${formattedTime.time}${formattedTime.format}`);
            }
        }
        catch (err) {
            Errors.scapedError("something went wrong during creation of your plugin.");
            console.log(err);
        }
    })
};
//! EXPORT OF COMMAND
exports.default = init;
