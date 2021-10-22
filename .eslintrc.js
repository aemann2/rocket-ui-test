module.exports = {
	env: {
		es6: true,
		commonjs: true,
		browser: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['react'],
	rules: {
		'spaced-comment': 0,
		'no-underscore-dangle': 0,
		'no-console': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'trailing-comma': 0,
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
};
