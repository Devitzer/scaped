// error, warning, info
import pc from "picocolors";


function scapedError(error: string): void {
    console.log(pc.red("scaped error:"), error);
}

function scapedWarn(warning: string): void {
    console.log(pc.yellow("scaped warn:"), warning);
}

function scapedInfo(info: string): void {
    console.log(pc.blue("scaped info:"), info);
}

export {
    scapedError,
    scapedWarn,
    scapedInfo
}