'use strict'

const { ModelProduct, ModelSeller } = require('../database/lib')()
const debug = require('debug')('tecnura:api:products')

async function createProduct (req, res, next) {
  const { name, price, description, SellerId } = req.body
  try {
    const product = await ModelProduct.create({
      name,
      price,
      description,
      SellerId
    })
    return res.status(201).send({
      ok: true,
      product: product.toJSON()
    })
  } catch (e) {
    next(e)
  }
}

async function getProducts (req, res, next) {
  try {
    const { limit, offset } = req.query
    debug(limit, offset)

    const products = await ModelProduct.findAll({
      include: {
        model: ModelSeller,
        as: 'Seller',
        required: true

      }
    })
    const count = products.length
    return res.status(200).send({
      ok: true,
      count,
      products
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createProduct,
  getProducts
}
