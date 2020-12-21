const setup = require('../database/setup')
const { Sequelize, DataTypes } = require('sequelize')
const { getHash } = require('../crypt/crypt')
module.exports = function BuyerSetup () {
	const sequelize = setup()
	const Buyer = sequelize.define('buyer', {
		buyer_id: {
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			set (value) {
				this.setDataValue('password', getHash(value))
			}
		}
	})
	return Buyer
}

