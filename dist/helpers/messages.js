// error, warning, info
import pc from "picocolors";
function scapedError(error) {
    console.log(pc.red("scaped error:"), error);
}
function scapedWarn(warning) {
    console.log(pc.yellow("scaped warn:"), warning);
}
function scapedInfo(info) {
    console.log(pc.blue("scaped info:"), info);
}
export { scapedError, scapedWarn, scapedInfo };
