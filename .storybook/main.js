const path = require('path');

module.exports = {
	stories: ['../storybook/stories/**/*.stories.(js|mdx)'],
	addons: [
		'@storybook/addon-actions', 
		'@storybook/addon-links', 
		'@storybook/addon-a11y/register', // TODO: Use WCAG 2.1 standard
		'@storybook/addon-knobs/register',
		'@storybook/addon-viewport/register',
		'@whitespace/storybook-addon-html/register',
		'@storybook/addon-docs',
		'./packages/addon-feedback/register',
	],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		// Return the altered config
		return config;
	},
};
