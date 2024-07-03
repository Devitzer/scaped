// important values or things from CommonJS (__dirname, __filename)
// this is actually from another project of mine
import { fileURLToPath } from "url";
import { dirname } from "path";
function getFilename(path) {
    return fileURLToPath(path);
}
function getDirname(path) {
    return dirname(getFilename(path));
}
export { getFilename, getDirname };
