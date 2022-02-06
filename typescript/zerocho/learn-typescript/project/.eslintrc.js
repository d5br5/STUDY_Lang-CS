module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
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
				"arrow-parens": "always",
				endOfLine: "auto",
				"no-mixed-spaces-and-tabs": "off",
			},
		],
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
};
