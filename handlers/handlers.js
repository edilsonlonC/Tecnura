'use strict'
const debug = require('debug')('tecnura:handler')

function notFoundError (req, res) {
  return res.status(404).send({
    message: 'Page Not Found',
    ok: false
  })
}

function serverError (err, req, res, next) {
  debug(err)
  return res.status(500).send({
    message: 'Server Error',
    ok: false
  })
}

module.exports = {
  notFoundError,
  serverError
}
