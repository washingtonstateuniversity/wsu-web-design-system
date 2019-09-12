const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		'components/global-header': './components/global-header/global-header.js',
	},
	output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js'
    },
	mode: 'development',
    devtool: 'source-map',
    
};