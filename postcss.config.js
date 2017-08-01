module.exports = () => ({
	plugins: [
		require('postcss-normalize')({
			forceImport: true
		}),
		require('precss'),
		require('postcss-custom-properties'),
		require('autoprefixer'),
	]
})
