const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		//scripts: './components/global-header/global-header.js',
		'components/global-header/global-header': './components/global-header/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
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
							name: '[path]/[name].[ext]',
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
