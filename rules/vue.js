module.exports = {
	parser: "vue-eslint-parser",

	parserOptions: {
		"sourceType": "module",
		"ecmaVersion": 2018
	},
	
	plugins: [
		"vue"
	],

	rules: {
		"vue/mustache-interpolation-spacing": ["error", "always"],

		"vue/no-multi-spaces": "error",

		"vue/max-attributes-per-line": 0,
	
		"vue/component-name-in-template-casing": [2, "PascalCase", {
			"registeredComponentsOnly": true,
			"ignores": []
		}],
	
		"vue/space-unary-ops": [
			2,
			{
				words: true,
				nonwords: false
			}
		],
	
		"vue/no-use-v-if-with-v-for": ["error", {
		  	"allowUsingIterationVar": true
		}],
	
		"vue/html-closing-bracket-newline": ["error", {
		  "singleline": "never",
		  "multiline": "never"
		}],
	
		"vue/max-attributes-per-line": ["error", {
			"singleline": 1,
			"multiline": {
				"max": 1
			}
		}],
	
		"vue/html-indent": ["error", "tab"],
	
		"vue/multiline-html-element-content-newline": ["error", {
			"ignoreWhenEmpty": false,
			"allowEmptyLines": true
		}],
	
		"vue/multiline-html-element-content-newline": "error"
	}
}