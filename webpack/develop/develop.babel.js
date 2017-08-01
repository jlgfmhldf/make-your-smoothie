import webpack from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import baseConfig from '../base'

export default {
	...baseConfig,
	entry: [
		...baseConfig.entry,
		'webpack-hot-middleware/client'
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	devtool: 'source-map',
	plugins: [
		...baseConfig.plugins,
		new BundleAnalyzerPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
	],
}
