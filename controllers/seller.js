'use strict'

function createUser (req, res, next) {
  try {
    return res.status(200).send({
      message: 'Working'
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createUser
}
