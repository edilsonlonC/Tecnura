'use strict'

const jwt = require('jsonwebtoken')
const configJWT = require('../config/conf-auth')
const { JWTSecret, expiresIn } = configJWT

function generateJwt (data) {
	let token = jwt.sign(data,JWTSecret,{ expiresIn })
	return token
}

function verifyToken (token){
	try{
		const decoded = jwt.verify(token, JWTSecret)
		return decoded
	}catch(e){
		return false
	}
}

module.exports = {
	generateJwt,
	verifyToken
}
