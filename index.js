module.exports = {
	extends: ["./rules/vue"].map(require.resolve),

	rules: {
		"semi": "error",
		"quotes": [2, "double"],
		"indent": ["error", "tab"],
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-console": "warn",
		"no-unused-vars": "warn",
		"space-unary-ops": [
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "never",
			},
		],
	},
};