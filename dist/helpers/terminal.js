// terminal related functions
import { exec } from "child_process";
import { promisify } from "util";
const asyncExecute = promisify(exec);
export { asyncExecute };
