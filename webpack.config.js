const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		'components/dist/global-header/global-header': './components/src/global-header/index.js',
		'components/dist/global-footer/global-footer': './components/src/global-footer/index.js',
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js'
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => [
								autoprefixer({
									overrideBrowserslist: [
										">1%",
										"last 4 versions",
										"Firefox ESR",
										"not ie < 9"
									]
								})
							]
						}
					},
					"sass-loader"
				],
			},
			{
				test: /.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'components/dist/[name]/[name].[ext]',
						}
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	]
};
