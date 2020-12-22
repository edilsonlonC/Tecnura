'use strict'
const router = require('express').Router()
const controller = require('../controllers/buyer')

router.post('/buyer', controller.createBuyer)

module.exports = router
