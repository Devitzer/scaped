// error, warning, info
import ansiColors from "ansi-colors";


function scapedError(error: string): void {
    console.log(ansiColors.red("scaped error:"), error);
}

function scapedWarn(warning: string): void {
    console.log(ansiColors.yellow("scaped warn:"), warning);
}

function scapedInfo(info: string): void {
    console.log(ansiColors.blue("scaped info:"), info);
}

export {
    scapedError,
    scapedWarn,
    scapedInfo
}