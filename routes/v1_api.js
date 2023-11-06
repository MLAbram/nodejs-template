const express = require('express')
const app = express()
const pgLogger = require('./pg_logger')

require('dotenv').config()

app.get('/', (req, res) => {
	res.status(200).json({status: 'ok', message: 'API v1'})
})

module.exports = app