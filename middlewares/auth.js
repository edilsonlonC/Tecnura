'use strict'
const { ModelSeller } = require('../database/lib')()
const { verifyToken } = require('../auth/')
function isAuthSeller(req,res,next){
	const { authorization } = req.headers
	if (!authorization) return next(new Error('unauthorized'))
	const token = authorization.split(' ')[1]
	if (!token) return next(new Error('unauthorized'))
	const decoded = verifyToken(token)
	const { name, email } = decoded
	if(!name || !email) return next(new Error('unauthorized'))
	const seller = ModelSeller.findOne({
		where:{
			name,
			email
			
		}
	})
	if(!seller) return next(new Error('unauthorized'))
	next()
	
}


module.exports = {
	isAuthSeller
}
