'use strict'
const router = require('express').Router()
const controller = require('../controllers/buyer')

router.post('/buyer', controller.createBuyer)
router.put('/buyer/:uuid',controller.updateBuyer)
router.delete('/buyer/:uuid', controller.deleteBuyer)

module.exports = router
