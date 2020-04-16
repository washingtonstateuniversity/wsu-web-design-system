const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = env => {

	const DEV = env.NODE_ENV === 'development';

	return {
		context: __dirname,
		entry: './demo/src/index.js',
		output: {
			path: path.resolve(__dirname, 'demo/'),
			filename: '[name].js'
		},
		mode: DEV ? 'development' : 'production',
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'component-global-header.html',
				template: 'demo/src/components/global-header.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-global-footer.html',
				template: 'demo/src/components/global-footer.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-article-header.html',
				template: 'demo/src/components/content-article-header.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-button.html',
				template: 'demo/src/components/content-button.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-card.html',
				template: 'demo/src/components/content-card.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-form.html',
				template: 'demo/src/components/content-form.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-hero.html',
				template: 'demo/src/components/content-hero.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-content-column.html',
				template: 'demo/src/components/content-column.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-site-nav-vertical.html',
				template: 'demo/src/components/site-nav-vertical.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-site-footer.html',
				template: 'demo/src/components/site-footer.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'component-site-header.html',
				template: 'demo/src/components/site-header.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'demo/src/index.html',
				inject: false,
				minify: false,
			}
			),
			new HtmlWebpackPlugin({
				filename: 'collection-article.html',
				template: 'demo/src/collections/article.html',
				inject: false,
				minify: false,
			}
			),
		]
	}
}
