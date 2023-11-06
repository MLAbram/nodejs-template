const express = require('express')
const app = express()
const pgLogger = require('./pg_logger')

require('dotenv').config()

app.get('/', (req, res) => {
    return res.status(200).render('index', {
        page_title: 'Home',
        navbar_title: '',
        breadcrumb: '<div style="font-family: \'Roboto Mono\'; font-size: .8rem;"><ol class="breadcrumb" style="margin: 0px;"><li class="breadcrumb-item active" aria-current="page">Home</li></ol></div>'
    })
})

app.get('/login', (req, res) => {
    return res.status(200).render('login', {
        page_title: 'Login',
        navbar_title: ' | Login',
        breadcrumb: '<div style="font-family: \'Roboto Mono\'; font-size: .8rem;"><ol class="breadcrumb" style="margin: 0px;"><li class="breadcrumb-item active" aria-current="page">Login</li></ol></div>'
    })
})

app.get('/privacy-policy', (req, res) => {
    return res.status(200).render('privacy-policy', {
        page_title: 'Privacy Policy',
        navbar_title: ' | Privacy Policy',
        breadcrumb: '<div style="font-family: \'Roboto Mono\'; font-size: .8rem;"><ol class="breadcrumb" style="margin: 0px;"><li class="breadcrumb-item active" aria-current="page">Privacy Policy</li></ol></div>'
    })
})

app.get('/terms-of-service', (req, res) => {
    return res.status(200).render('terms-of-service', {
        page_title: 'Terms of Service',
        navbar_title: ' | Terms of Service',
        breadcrumb: '<div style="font-family: \'Roboto Mono\'; font-size: .8rem;"><ol class="breadcrumb" style="margin: 0px;"><li class="breadcrumb-item active" aria-current="page">Terms of Service</li></ol></div>'
    })
})

module.exports = app