'use strict'
const { validateHash } = require('../crypt/crypt')
const { ModelSeller } = require('../database/lib/')()
const { getToken } = require('../auth')
const debug = require('debug')('tecnura:api:seller')
async function loginSeller (req,res,next){

	const { password, email } = req.body
	if ( !password || !email ) next(new Error('NotArguments'))
	try{

		const seller = await ModelSeller.findOne({
			where:{
				email
			},
			attributes: ['password', 'seller_id', 'name','email']
		})
		debug(seller)
		if ( seller ){
			debug(seller.password)
		if ( validateHash(password, seller.password) ){
			const tokens = getToken({
				token:{
					name: seller.name,
					email: seller.email
				},
				refreshToken:{
					uuid: seller.seller_id
				}
			})
			return res.status(200).send(tokens)
		}
		next(new Error('unauthorized'))
		}

	}catch(e){
		next(e)
	}
}


module.exports = {
	loginSeller
}
