'use strict'

const setup = require('../database/setup')
const Product = require('./product')
const Buyer = require('./buyer')
const { Sequelize , DataTypes} = require('sequelize')

module.exports = function () {
	const sequelize = setup()
	const Order = sequelize.define('order', {
		order_id: {
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		ProductId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: Product,
				key: 'product_id'
			},
			BuyerId: {
				type: DataTypes.UUID,
				allowNull: false,
				references: {
					model: Buyer,
					key: 'buyer_id'
				}
			}
		}
	})
	return Order
}
