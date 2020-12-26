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

async function updateBuyer (req, res, next) {
  const { uuid } = req.params
  const { name } = req.body
  try {
    const updatedBuyer = await ModelBuyer.update({ name }, {
      where: {
        buyer_id: uuid
      }
    })
    return res.status(200).send({
      ok: true,
      updatedBuyer
    })
  } catch (e) {
    next(e)
  }
}

async function deleteBuyer (req, res, next) {
  const { uuid } = req.params
  try {
    const removedBuyer = await ModelBuyer.destroy({
      buyer_id: uuid
    })
    return res.status(200).send({
      ok: true,
      removedBuyer
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createBuyer,
  updateBuyer,
  deleteBuyer
}
