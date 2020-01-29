module.exports = {
	plugins: [
		"vue"
	],

	rules: {

		"quotes": [2, "double"],
		"indent": ["error", "tab"],
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-console": "warn",
		"no-unused-vars": "warn",
		"space-unary-ops": [
			2,
			{
				words: true,
				nonwords: false
			}
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always"
			}
		],
	
		/**
		 * Vue related rules
		 */
	
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
};