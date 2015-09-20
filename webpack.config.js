var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	devtool: 'inline-source-map',

	entry: {
		'app': './src/app'
	},

	output: {
		path: '__build__',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/__build__/'
	},

	module: {
		loaders: [
			{ test: /\.es6$/, exclude: /node_modules/, loader: 'babel' },
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},

	resolve: {
		extensions: ["", ".es6", ".webpack.js", ".web.js", ".js"]
	},

	plugins: [
		new ExtractTextPlugin('main.css', {
			allChunks: true
		})
	]

};
