'use strict'
const router = require('express').Router()
const controller = require('../controllers/seller')

router.get('/user', controller.createUser)
router.post('/seller', controller.createSeller)
router.put('/seller/:uuid', controller.updatesSeller)
router.delete('/seller/:uuid', controller.deleteSeller)
module.exports = router
