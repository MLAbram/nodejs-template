const express = require('express')
const app = express()
const pgLogger = require('./routes/pg-logger')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const handlebars = require('./routes/handlebars')
const v1_api = require('./routes/v1-api')

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
app.use('/', handlebars)
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
		routeName: 'v1-hbs',
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