'use strict'
const router = require('express').Router()
const controller = require('../controllers/seller')

router.get('/user', controller.createUser)
router.post('/seller', controller.createSeller)
module.exports = router
