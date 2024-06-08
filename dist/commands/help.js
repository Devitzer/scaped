"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//! COMMAND INTERFACE
const help = {
    name: ["help", "commands"],
    execute: (args) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Command List and Functions:");
        console.log("help / commands    -   Self-explanatory. Command list and their functions.");
        console.log("init   -   Initialize a plugin. This makes sure that no issues arise like if it was set up manually.");
        console.log("list   -   A list that shows all the currently installed plugins. If you installed a plugin and it doesn't show up here, you or the plugin creator may have done something wrong.");
    })
};
//! EXPORT OF COMMAND
exports.default = help;
