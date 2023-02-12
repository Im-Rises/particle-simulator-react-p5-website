module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		// 'xo-react',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'eol-last': [
			'error',
			'always',
		],
		'capitalized-comments': 'off',
		'react/prop-types': 1,
		'no-trailing-spaces': 0,
		'no-mixed-spaces-and-tabs': 'off',
		'max-len': ['error', {code: 120, ignoreComments: true}],
		'max-lines-per-function': ['error', {max: 100, skipBlankLines: true, skipComments: true}],
		'max-params': [
			'error',
			6,
		],
	},
};
