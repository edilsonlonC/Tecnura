'use strict'
const router = require('express').Router()
const controller = require('../controllers/product')
const { isAuthSeller } = require('../middlewares/auth') 
router.post('/product', controller.createProduct)
router.get('/products',isAuthSeller ,controller.getProducts)
router.get('/products/:uuid', controller.getProductsBySeller)
router.put('/product/:uuid', controller.updateProduct)
router.delete('/product/:uuid', controller.deleteProduct)

module.exports = router
