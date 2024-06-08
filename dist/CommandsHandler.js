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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
//! IMPORT DEFAULT COMMANDS | this is as an assurance, so I know that they will work. Plugins will be imported somewhat dynamically.
const help_1 = __importDefault(require("./commands/help"));
const init_1 = __importDefault(require("./commands/init"));
//! IMPORT ERRORS
function HandleCommand(args) {
    return __awaiter(this, void 0, void 0, function* () {
        //! COMMAND IS STRING VALIDATION
        if (typeof args._[0] !== "string") {
            throw new Error("You cannot use a number as a command!");
        }
        if (help_1.default.name.includes(args._[0])) {
            yield help_1.default.execute(args);
        }
        else if (init_1.default.name.includes(args._[0])) {
            yield init_1.default.execute(args);
        }
        else {
            console.log("The command \"", args._[0], "\" does not exist!");
        }
    });
}
const CommandHandler = {
    HandleCommand: HandleCommand
};
exports.CommandHandler = CommandHandler;
