const errorInProduction = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
	parser: "vue-eslint-parser",

	parserOptions: {
		"parser": "@babel/eslint-parser",
		"sourceType": "module",
		"ecmaVersion": 2018,
		"requireConfigFile": false,
	},

	plugins: [
		"vue",
	],

	rules: {
		"vue/mustache-interpolation-spacing": ["error", "always"],
		"vue/no-multi-spaces": "error",
		"vue/max-attributes-per-line": 0,
		"vue/component-name-in-template-casing": [2, "PascalCase", {
			"registeredComponentsOnly": true,
			"ignores": [],
		}],
		"vue/space-unary-ops": [
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		"vue/no-use-v-if-with-v-for": ["error", {
		  	"allowUsingIterationVar": true,
		}],
		"vue/html-closing-bracket-newline": ["error", {
		  "singleline": "never",
		  "multiline": "never",
		}],
		"vue/max-attributes-per-line": ["error", {
			"singleline": 1,
			"multiline": {
				"max": 1,
			},
		}],
		"vue/html-indent": ["error", "tab"],
		"vue/multiline-html-element-content-newline": ["error", {
			"ignoreWhenEmpty": false,
			"allowEmptyLines": true,
		}],
		"vue/no-v-html": 0,
		"vue/multiline-html-element-content-newline": "error",
		"vue/padding-line-between-blocks": ["error", "always"],
		"vue/component-tags-order": ["error",
			{
				"order": ["template", "script", "style"],
			},
		],
		"vue/no-unused-components": errorInProduction,
		"vue/no-mutating-props": 0,
		"vue/no-lone-template": 0,
		"vue/new-line-between-multi-line-property": ["error", {
			"minLineOfMultilineProperty": 2,
		}],
		"vue/this-in-template": ["error", "never"],
		"import/no-unresolved": 0,
		"vue/first-attribute-linebreak": ["error", {
			"singleline": "beside",
			"multiline": "below",
		}],
	},
};
