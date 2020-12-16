'use strict'
const router = require('express').Router()
const controller = require('../controllers/seller')

router.get('/user', controller.createUser)

module.exports = router
