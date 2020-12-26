'use strict'
const router = require('express').Router()
const controller = require('../controllers/product')

router.post('/product', controller.createProduct)
router.get('/products', controller.getProducts)
router.get('/products/:uuid', controller.getProductsBySeller)

module.exports = router
