const path = require('path')
const webpack = require('webpack')
const mqpacker = require('css-mqpacker')
const cssnano = require('cssnano')
const StyleLintPlugin = require('stylelint-webpack-plugin') //TODO
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV || 'develop'
const isDevelopment = NODE_ENV === 'develop'
const isProd = NODE_ENV === 'production'
const { stringify } = JSON

const babelRcPath = path.join(__dirname, '../.babelrc')

module.exports = {
	entry: [
		'babel-polyfill',
		'./app',
	],
	output: {
		path: path.join(__dirname, '../public'),
		filename: 'app.min.js',
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: stringify(NODE_ENV),
		}),
		new StyleLintPlugin({
			files: [
				'./app/components/**/*.css',
				'./app/styles/*.css'
			], //TODO
			configFile: './.stylelintrc',
		}),
		new ExtractTextPlugin('style.css'),
		new PostCSSAssetsPlugin({
			test: /\.css$/,
			log: true,
			plugins: [
				// Pack same CSS media query rules into one media query rule
				mqpacker,
				cssnano({
					preset: 'default'
				}),
			],
		}),
		new webpack.DefinePlugin({
			__DEV__: isDevelopment,
			__PROD__: isProd,
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
	devServer: {
		inline: true
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			include: [path.resolve(__dirname, '../app')],
			use: [
				'react-hot-loader',
				{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						extends: babelRcPath,
					}
				},
				{
					loader: 'eslint-loader',
					options: {
						fix: true,
					}
				}
			],
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: [
					'css-loader?modules',
					'postcss-loader',
				]
			}),
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2|json)$/,
			loader: 'url-loader',
			options: {
				limit: 1,
			},
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	}
}
