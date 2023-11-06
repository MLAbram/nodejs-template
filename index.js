const express = require('express')
const app = express()
const pgLogger = require('./routes/pg_logger')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const v1_hbs = require('./routes/v1_hbs')
const v1_api = require('./routes/v1_api')

require('dotenv').config()

hbs.registerPartials(__dirname + '/views', function (err) {})

app.set('view engine', 'hbs')

if (app.get('env') == 'production') {
    app.set('trust proxy', 1) // trust first proxy
}

app.use(express.json())
app.use(express.static(process.cwd() + '/html'))
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())
// app.use(cookieParser('secret'))
app.use('/', v1_hbs)
app.use('/api/v1', v1_api)

// redirect invalid requests
app.all('*', (req, res) => {
	const userURL = req.protocol + '://' + req.get('host') + req.originalUrl
	const userIP = req.ip
	const userUA = req.header('User-Agent')
	const userLanguage = req.header('Accept-Langauge')

	pgLogger.info({
		message: 'Unmatched URL',
		meta: '',
		routeName: 'v1_hbs',
		routeFunction: 'Redirect Invalid Request',
		routeFunctionSub: '(61)',
    url: userURL,
		req: req.ip,
		userIP: userIP,
		userUA: userUA
	})

	res.redirect('/')
})

app.listen(3000, () => {
    console.log('Server listening on port: 3000.')
})