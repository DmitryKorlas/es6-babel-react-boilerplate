var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'inline-source-map',

	entry: {
		app: './src/app'
	},

	output: {
		path: path.join(process.cwd(), 'build/static'),
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/static/'
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
		extensions: ['', '.es6', '.webpack.js', '.web.js', '.js', '.html']
	},

	plugins: [
		new ExtractTextPlugin('main.css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			hash: true,
			minify: true,
			data: {
				some: 'value'
			},
			filename: '../some-template.html',
			template: './src/some-template.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			minify: true,
			data: {
				some: 'value'
			},
			filename: '../index.html',
			template: './src/index.html'
		})
	]


};
