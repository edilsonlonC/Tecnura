'use strict'
const bcrypt = require('bcrypt')

function getHash (data) {
  return bcrypt.hashSync(data, 5)
}

module.exports = {
  getHash
}
