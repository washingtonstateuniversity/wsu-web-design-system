const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = env => {

	const DEV = env.NODE_ENV === 'development';

	return {
		context: __dirname,
		entry: './demo-src/index.js',
		output: {
			path: path.resolve( __dirname, 'demo/' ),
			filename: '[name].js'
		},
		mode: DEV ? 'development' : 'production',
		plugins: [
			new HtmlWebpackPlugin({ 
				filename: 'content-article.html',
				template: 'demo-src/content-article/content-article.html',
				inject: false,
				minify: false,
			  }
			),
			new HtmlWebpackPlugin({ 
				filename: 'content-article-bundle.html',
				template: 'demo-src/content-article/content-article-bundle.html',
				inject: false,
				minify: false,
			  }
			),
			new HtmlWebpackPlugin({ 
				filename: 'content-article-header.html',
				template: 'demo-src/content-article/content-article-header.html',
				inject: false,
				minify: false,
			  }
			),
			new HtmlWebpackPlugin({ 
				filename: 'site-nav-vertical.html',
				template: 'demo-src/site-nav-vertical/site-nav-vertical.html',
				inject: false,
				minify: false,
			  }
			),
			new HtmlWebpackPlugin({ 
				filename: 'index.html',
				template: 'demo-src/index.html',
				inject: false,
				minify: false,
			  }
			)
		]
	}
}