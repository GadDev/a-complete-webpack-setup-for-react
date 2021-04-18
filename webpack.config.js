/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		chunkFilename: '[id].js',
		publicPath: '',
	},
	devtool: 'source-map',
	devServer: {
		compress: true,
		contentBase: path.join(__dirname, 'src'),
		contentBasePublicPath: '/',
		historyApiFallback: true,
		hot: true,
		open: true,
		overlay: true,
		port: 8002,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	mode: process.env.NODE_ENV || 'development',
	plugins: [
		new CleanWebpackPlugin(),
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
			favicon: false,
			showErrors: true,
			cache: true,
		}),
	],
};
