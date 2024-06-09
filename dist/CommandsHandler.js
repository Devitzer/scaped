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
exports.CommandHandler = void 0;
//! IMPORT DEFAULT COMMANDS | this is as an assurance, so I know that they will work. Plugins will be imported somewhat dynamically.
const help_1 = __importDefault(require("./commands/help"));
const init_1 = __importDefault(require("./commands/init"));
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const package_json_1 = __importDefault(require("../package.json"));
const Messages = __importStar(require("./helpers/messages"));
//! IMPORT ERRORS
function HandleCommand(args) {
    return __awaiter(this, void 0, void 0, function* () {
        //! COMMAND IS STRING VALIDATION
        if (args._[0]) {
            if (typeof args._[0] !== "string") {
                Messages.scapedError("you cannot use a number as a command!");
                return;
            }
        }
        else {
            args._[0] = "";
        }
        if (help_1.default.name.includes(args._[0])) {
            yield help_1.default.execute(args);
        }
        else if (init_1.default.name.includes(args._[0])) {
            yield init_1.default.execute(args);
        }
        else if (args.v || args.version) {
            console.log(ansi_colors_1.default.red("scaped cli:"), "running version", package_json_1.default.version);
        }
        else {
            Messages.scapedWarn(`the command \"${args._[0]}\"`);
        }
    });
}
const CommandHandler = {
    HandleCommand: HandleCommand
};
exports.CommandHandler = CommandHandler;
