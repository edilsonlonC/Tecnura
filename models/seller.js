'use strict'
const setup = require('../database/setup')
const { Sequelize, DataTypes } = require('sequelize')
const { getHash } = require('../crypt/crypt')

module.exports = function () {
  const sequelize = setup()
  const Seller = sequelize.define('seller', {
    seller_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
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

  })

  return Seller
}
