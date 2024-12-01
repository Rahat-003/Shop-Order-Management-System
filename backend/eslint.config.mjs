import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
        },
        rules: {
            // Disable the no-unused-vars rule
            "no-unused-vars": "off",
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        ...pluginJs.configs.recommended,
        rules: {
            ...pluginJs.configs.recommended.rules,
            // Ensure no-unused-vars is turned off here as well
            "no-unused-vars": "off",
        },
    },
];
