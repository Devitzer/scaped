// terminal related functions
import { spawn } from "child_process";
// log is whether or not to log the output of the spawned command
// pre means pre configured
const spawnPre = (command, args, options, log) => {
    return new Promise((resolve, reject) => {
        const process = spawn(command, args, options);
        if (log) {
            process.stdout.on("data", (data) => {
                console.log(data);
            });
        }
        process.stderr.on("data", (data) => {
            console.error(data);
            reject();
        });
        process.on("error", (error) => {
            reject(error);
        });
        process.on("close", (code) => {
            if (code === 0) {
                resolve();
            }
            else {
                reject();
            }
        });
    });
};
export { spawnPre };
