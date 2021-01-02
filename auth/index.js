'use strict'
const fs = require('fs')
const jwt = require('jsonwebtoken')
const configJWT = require('../config/conf-auth')
const debug = require('debug')('tecnura:auth')

function generateJwt (data,secret) {
	let token = jwt.sign(data,secret,{ expiresIn: 30 })
	return token
}

function verifyToken (token,secret){
	try{
		const decoded = jwt.verify(token, secret)
		return decoded
	}catch(e){
		debug(e)
		return false
	}
}

function getToken(options){
	let tokens = {}
	if ( options.token ){
		const secret = configJWT.token.JWTSecret
		const token = generateJwt(options.token.data,secret)
		debug(options.token.data,secret)
		tokens = { ...tokens, token }
	}
	if ( options.refreshToken ){
		const secret = configJWT.refrest_token.JWTSecret
		debug(secret,options.refreshToken.data)
		const refreshToken = generateJwt(options.refreshToken.data,secret)
		tokens = { ...tokens, refreshToken }
	}
	return tokens
}

module.exports = {
	generateJwt,
	verifyToken,
	getToken

}
