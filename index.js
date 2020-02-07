module.exports = {
	extends: [
		"eslint-config-nefely-base",
		"./rules/vue",
	].map(require.resolve),
};