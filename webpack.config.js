const path = require("path");
const webpack = require('webpack')

module.exports = {
	context: __dirname,
	entry: "./assets/src/entry.jsx",
	output: {
		path: path.resolve('./assets/build'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: [/\.jsx?$/, /\.js?$/],
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	devtool: 'source-maps',
	resolve: {
		root: path.resolve('./assets/src'),
		extensions: ["", ".js", ".jsx" ]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
};