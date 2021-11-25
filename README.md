# eslint-config-nefely
[![npm version](https://badge.fury.io/js/eslint-config-nefely.svg)](https://www.npmjs.com/package/eslint-config-nefely)

An eslint config for Vue.js projects

## Installation

```
npm install -D eslint eslint-config-nefely
```


Then add
```json
{
	"extends": ["nefely"]
}
```
to your `.eslintrc`

## Code linting example
```vue
<template>
	<div
		v-if="myCondition"
		class="container">
		<p>
			{{ paragraphContent }}
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			paragraphContent: "Lorem ipsum...",
		};
	},

	computed: {
		myCondition() {
			return false;
		},
	},
};
</script>
