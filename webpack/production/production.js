import webpack from 'webpack'
import baseConfig from '../base'
import BabiliPlugin from 'babili-webpack-plugin'

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new BabiliPlugin(),
	]
}

