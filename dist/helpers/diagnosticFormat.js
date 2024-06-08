"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diagnosticFormat(milliseconds) {
    if (milliseconds >= 1000) {
        return {
            time: milliseconds / 1000,
            format: "s"
        };
    }
    return {
        time: milliseconds,
        format: "ms"
    };
}
exports.default = diagnosticFormat;
