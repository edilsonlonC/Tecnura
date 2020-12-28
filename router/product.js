'use strict'
const router = require('express').Router()
const controller = require('../controllers/product')

router.post('/product', controller.createProduct)
router.get('/products', controller.getProducts)
router.get('/products/:uuid', controller.getProductsBySeller)
router.put('/product/:uuid', controller.updateProduct)
router.delete('/product/:uuid', controller.deleteProduct)

module.exports = router
