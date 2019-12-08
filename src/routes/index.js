'use strict'
const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    console.log(`Request to /`)
    res.send('Hello index world!')
})

module.exports = router