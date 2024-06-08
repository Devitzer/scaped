#!/usr/bin/env node
"use strict";
// !PACKAGES
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
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const CommandsHandler_1 = require("./CommandsHandler");
// !CLI HANDLER
const argv = (0, helpers_1.hideBin)(process.argv);
const args = (0, yargs_1.default)(argv)
    .help(false)
    .version(false)
    .argv;
// !COMMANDS EXECUTE
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield CommandsHandler_1.CommandHandler.HandleCommand(args);
    });
}
main();
// ^^ ye thats about it most of the handling is in ./Commands
