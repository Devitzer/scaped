import * as Messages from "./helpers/messages.js";
/**
 * Allows for config validation, easier for both the user and us.
 *
 * @since 0.4.0
 */
class PluginConfiguration {
    config;
    /**
     *
     * @param {PluginConfig} Config The plugin config. Check docs or your IDE may have Intellisense for it.
     */
    constructor(Config) {
        this.config = Config;
    }
    /**
     * You can use this if you want to be safe prior to releasing your plugin config. Do not export your config with this function.
     * This function validates every single property, that it's there, and that it's type is what was expected.
     *
     * @param {boolean} log Whether or not to log the validation errors.
     * @since 0.4.0
     */
    Validate(log) {
        if (typeof this.config.name !== "string") {
            if (log) {
                Messages.scapedError("The property \"name\" was not a string!");
                Messages.scapedError("Due to this, the plugin is unknown, please check for plugins that do not have string names.");
            }
            return false;
        }
        else if (typeof this.config.author !== "string") {
            if (log) {
                Messages.scapedError("The property \"author\" was not a string!");
            }
            return false;
        }
        else if (typeof this.config.version !== "string") {
            //TODO FUTURE PLAN (verify that it's a semantic version instead, using semver.)
            if (log) {
                Messages.scapedError("The property \"version\" was not a string!");
            }
            return false;
        }
        else if (this.config.lang !== "javascript" && this.config.lang !== "typescript") {
            if (log) {
                Messages.scapedError("The property \"lang\" must either be \"javascript\" or \"typescript\"!");
            }
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
    get() {
        this.Validate(false);
        return this.config;
    }
}
export { PluginConfiguration };
