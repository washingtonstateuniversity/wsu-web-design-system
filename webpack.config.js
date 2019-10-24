const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = env => {

	const DEV = env.NODE_ENV === 'development';

	return {
		context: __dirname,
		entry: {
			'components/dist/global-footer/global-footer': './components/src/global-footer/index.js',
			'components/dist/global-header/global-header': './components/src/global-header/index.js',
		},
		output: {
			path: path.resolve(__dirname),
			filename: '[name].js'
		},
		mode: DEV ? 'development' : 'production',
		devtool: DEV ? 'inline-source-map' : 'source-map',
		devServer: {
			writeToDisk: true,
			contentBase: path.join(__dirname),
			overlay: true,
			quiet: true
		},
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
						"markup-inline-loader"
					],
				},
			],
		},
		optimization: {
			minimize: !DEV,
			minimizer: [
				new OptimizeCSSAssetsPlugin({
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true
						}
					}
				}),
				new TerserPlugin({
					terserOptions: {
						compress: {
							warnings: false,
						},
						output: {
							comments: false
						}
					},
					sourceMap: true
				})
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
		]
	}
};
