// used only for TypeScript plugin creation
// not done

declare module "scaped" {
    
    import yargsParser from "yargs-parser";
    
    export interface CommandInterface {
        name: string[]
        execute: (args: yargsParser.Arguments) => void
    }
    
    export interface PluginConfig {
        name: string;
        version: string;
        author: string;
        lang: "javascript" | "typescript";
    }
    
    /**
     * A class that contains your configuration class. Export this in your `plugin.config` file.
     * 
     * @since 0.4.0
     */
    export class PluginConfiguration {
        private config: PluginConfig;
    
        constructor(Config: PluginConfig)
    
        /**
         * You can use this if you want to be safe prior to releasing your plugin config. Do not export your config with this function.
         * This function validates every single property, that it's there, and that it's type is what was expected.
         * 
         * @param {boolean} log Whether or not to log the validation errors.
         * @since 0.4.0
         */
        public Validate(log?: boolean): boolean;
    
        /**
         * Returns the config you defined. We use this to get your config.
         * 
         * @returns PluginConfig
         */
        public get(): PluginConfig;
    }
    
}