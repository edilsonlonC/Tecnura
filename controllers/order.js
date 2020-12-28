'use strict'
const { ModelOrder, ModelProduct, ModelSeller, ModelBuyer } = require('../database/lib')()

async function createOrder (req, res, next) {
  const { SellerId, BuyerId, ProductId } = req.body
  try {
    const order = await ModelOrder.create({
      SellerId,
      BuyerId,
      ProductId
    })
    return res.status(201).send({
      ok: true,
      order
    })
  } catch (e) {
    next(e)
  }
}

async function getOrdersBySeller (req, res, next) {
  const { limit, offset } = req.query
  const { uuid } = req.params
  try {
    const orders = await ModelOrder.findAll({
      limit,
      offset,
      where: {
        SellerId: uuid
      },
      include: [ModelProduct, ModelBuyer]
    })
    return res.status(200).send({
      count: orders.length,
      orders
    })
  } catch (e) {
    next(e)
  }
}

async function getOrderByBuyer (req, res, next) {
  const { limit, offset } = req.query
  const { uuid } = req.params
  try {
    const orders = await ModelOrder.findAll({
      limit,
      offset,
      where: {
        BuyerId: uuid
      },
      include: [ModelProduct, ModelSeller]
    })
    return res.status(200).send({
      count: orders.length,
      orders
    })
  } catch (e) {
    next(e)
  }
}

async function getOrder (req, res, next) {
  const { uuid } = req.params
  try {
    const order = await ModelOrder.findOne({
      where: {
        order_id: uuid
      }
    })
    return res.status(200).send({
      ok: true,
      order
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createOrder,
  getOrderByBuyer,
  getOrdersBySeller,
  getOrder
}
