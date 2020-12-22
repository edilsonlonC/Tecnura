'use strict'
const { ModelSeller , ModelProduct } = require('../database/lib')()
async function createUser (req, res, next) {
  try {
    const seller = await ModelSeller.create({
      name: 'test name',
      email: 'test email',
      password: 'test password'
    })
    const sellerJson = seller.toJSON()
    const product = await ModelProduct.create({
      name: 'product name',
      price: 2.4,
      SellerId: sellerJson.seller_id

    })
    return res.status(200).send({
      message: 'Working',
      seller: seller.toJSON(),
      product: product.toJSON()
    })
  } catch (e) {
    next(e)
  }
}

async function createSeller (req, res, next) {
  try {
    const { name, address, email, password } = req.body
    const seller = await ModelSeller.create({ name, address, email, password })
    return res.status(201).send({
      ok: true,
      seller: seller.toJSON()
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createUser,
  createSeller
}
