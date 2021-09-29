module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: [
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		semi: [2, 'always'],
		indent: ['error', 'tab'],
		'no-tabs': 'off'
	}
};
