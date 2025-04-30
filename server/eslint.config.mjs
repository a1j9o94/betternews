import js from "@eslint/js";
import drizzlePlugin from "drizzle-plugin-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "eslint/compat";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  eslintPrettierConfig,
  {
    plugins: {
      drizzle: fixupPluginRules(drizzlePlugin),
      prettier: eslintPluginPrettier,
    },
  },
]);
