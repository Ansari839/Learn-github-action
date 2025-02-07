// eslint.config.js
export default [
  {
    ignores: ["node_modules"], // Ignore node_modules folder
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Files to lint
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

