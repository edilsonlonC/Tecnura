'use strict'
const { ModelSeller, ModelProduct } = require('../database/lib')()
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

async function updatesSeller (req, res, next) {
  const { uuid } = req.params
  const { name, address } = req.body
  try {
    const updatedSeller = await ModelSeller.update({
      name,
      address
    }, {
      where: {
        seller_id: uuid
      }
    })
    return res.status(200).send({
      ok: true,
      updatedSeller
    })
  } catch (e) {
    next(e)
  }
}

async function deleteSeller (req, res, next) {
  const { uuid } = req.params
  try {
    const removedSeller = await ModelProduct.destroy({
      where: {
        product_id: uuid
      }
    })
    return res.status(200).send({
      ok: true,
      removedSeller
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createUser,
  createSeller,
  updatesSeller,
  deleteSeller
}
