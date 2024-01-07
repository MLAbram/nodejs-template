const express = require('express')
const app = express()
const pgLogger = require('./pg-logger')

require('dotenv').config()

app.get('/', (req, res) => {
	res.status(200).json({status: 'pass', message: 'API v1'})
})

module.exports = app