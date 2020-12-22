'use strict'
const ModelBuyer = require('../models/buyer')()

async function createBuyer (req, res, next) {
  const { name, email, password } = req.body
  try {
    const buyer = await ModelBuyer.create({
      name,
      email,
      password
    })
    return res.status(201).send({
      ok: true,
      buyer: buyer.toJSON()
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createBuyer
}
