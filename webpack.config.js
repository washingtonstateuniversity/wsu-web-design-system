const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		scripts: './assets/src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './assets/dist'),
		filename: 'scripts.js'
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
									browsers: [
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
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
	]
};