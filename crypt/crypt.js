'use strict'
const bcrypt = require('bcrypt')

function getHash (data) {
  return bcrypt.hashSync(data, 5)
}

function validateHash(plaintext, hash){
	return bcrypt.compareSync(plaintext, hash)
}



module.exports = {
	getHash,
	validateHash
}
