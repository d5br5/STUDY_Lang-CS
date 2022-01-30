module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        "arrow-parens": "as-needed",
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-const": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
