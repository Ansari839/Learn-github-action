export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",  // This allows console statements
    },
  },
];
