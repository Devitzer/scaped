"use strict";
// terminal related functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncExecute = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
const asyncExecute = (0, util_1.promisify)(child_process_1.exec);
exports.asyncExecute = asyncExecute;
