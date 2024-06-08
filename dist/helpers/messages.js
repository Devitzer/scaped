"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scapedInfo = exports.scapedWarn = exports.scapedError = void 0;
// error, warning, info
const ansi_colors_1 = __importDefault(require("ansi-colors"));
function scapedError(error) {
    console.log(ansi_colors_1.default.red("scaped error:"), error);
}
exports.scapedError = scapedError;
function scapedWarn(warning) {
    console.log(ansi_colors_1.default.yellow("scaped warn:"), warning);
}
exports.scapedWarn = scapedWarn;
function scapedInfo(info) {
    console.log(ansi_colors_1.default.blue("scaped info:"), info);
}
exports.scapedInfo = scapedInfo;
