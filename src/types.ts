import yargsParser from "yargs-parser";
import * as Messages from "./helpers/messages.js";

interface CommandInterface {
    name: string[]
    execute: (args: yargsParser.Arguments) => void
}

interface PluginConfig {
    name: string;
    version: string;
    author: string;
    lang: "javascript" | "typescript"
}

/**
 * Allows for config validation, easier for both the user and us.
 * 
 * @since 0.4.0
 */
class PluginConfiguration {
    private config: PluginConfig;

    constructor(Config: PluginConfig) {
        this.config = Config;
    }
    
    /**
     * You can use this if you want to be safe prior to releasing your plugin config. Do not export your config with this function.
     * This function validates every single property, that it's there, and that it's type is what was expected.
     * 
     * @since 0.4.0
     */
    public Validate(): boolean {
        if (typeof this.config.name !== "string") {
            Messages.scapedError("The property \"name\" was not a string!");
            Messages.scapedError("Because of this, we don't know exactly what plugin is causing it, but this is the name it gave:", );
            return false;
        } else if (typeof this.config.author !== "string") {
            Messages.scapedError("The property \"author\" was not a string!");
            return false;
        } else if (typeof this.config.version !== "string") {
            //TODO FUTURE PLAN (verify that it's a semantic version instead, using semver.)
            Messages.scapedError("The property \"version\" was not a string!");
            return false;
        } else if (this.config.lang !== "javascript" && this.config.lang !== "typescript") {
            Messages.scapedError("The property \"lang\" must either be \"javascript\" or \"typescript\"!");
            return false;
        }

        return true;
    }

    /**
     * Returns the config you defined. Nothing major.
     * 
     * 
     * @returns PluginConfig
     */
    public get(): PluginConfig {
        this.Validate();
        return this.config;
    }
}

export {
    CommandInterface,
    PluginConfig,
    PluginConfiguration
}