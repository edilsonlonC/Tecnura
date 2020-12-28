'use strict'
const router = require('express').Router()
const controller = require('../controllers/order')
router.post('/order', controller.createOrder)
router.get('/order/:uuid', controller.getOrder)
router.get('/order/seller/:uuid', controller.getOrdersBySeller)
router.get('/order/buyer/:uuid', controller.getOrderByBuyer)

module.exports = router
