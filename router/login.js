'use strict'
const router = require('express').Router()
const controller = require('../controllers/login')

router.post('/seller/login', controller.loginSeller)

module.exports = router
