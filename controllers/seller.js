'use strict'
const ModelSeller = require('../models/seller')()
const ModelProduct = require('../models/product')()
async function createUser (req, res, next) {
  try {
    const seller = await ModelSeller.create({
      name: 'test name',
      email: 'test email',
      password: 'test password'
    })
    const sellerJson = seller.toJSON()
    console.log(sellerJson)
    const product = await ModelProduct.create({
      name: 'product name',
      price: 2.4,
      SellerId: sellerJson.seller_id

    })
    return res.status(200).send({
      message: 'Working',
      seller,
      product
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createUser
}
