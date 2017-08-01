const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack/develop')

const app = new (require('express'))()
const port = 3000

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
	noInfo: false,
	publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('*.js', function (req, res, next) {
	console.log('test')
	req.url = req.url + '.gz'
	res.set('Content-Encoding', 'gzip')
	next()
})

app.get("/", function(req, res) {
	res.sendFile(`${__dirname}/public/index.html`)
})

/* eslint-disable no-console */
app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`)
	}
})
