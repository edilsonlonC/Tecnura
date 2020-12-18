'use strict'
const setup = require('../database/setup')
const { Sequelize, DataTypes } = require('sequelize')
const { getHash } = require('../crypt/crypt')
module.exports = function Usersetup () {
  const sequelize = setup()
  const Seller = sequelize.define('Seller', {
    seller_id: {
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
      type: DataTypes.STRING(300),
      allowNull: false,
      set (value) {
        this.setDataValue('password', getHash(value))
      }
    },
    address: {
      type: DataTypes.STRING
    }

  }
  )

  return Seller
}
