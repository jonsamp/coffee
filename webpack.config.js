var DashboardPlugin = require('webpack-dashboard/plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.scss$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['style', "css", "sass"]
		}, {
			test: /\.css$/,
			exclude: /(bower_components)/,
			loaders: ['style', "css", "sass"]
		}, {
			test: /\.json$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'json'
		}]
	},
	sassLoader: {
		includePaths: __dirname + "/app/stylsheets"
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new DashboardPlugin()
	]
};
