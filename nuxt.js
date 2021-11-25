module.exports = {
	extends: [
		...["plugin:nuxt/recommended"],

		...([
			"eslint-config-nefely-base",
			"./rules/vue",
			"./rules/nuxt",
		].map(require.resolve)),
	],
};
