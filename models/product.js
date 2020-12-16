'use strict'

const setup = require('../database/setup')
const Seller = require('./seller')()
const { Sequelize, DataTypes } = require('sequelize')

module.exports = function () {
  const sequelize = setup()
  const Product = sequelize.define('product', {
    product_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING(300)
    },
    SellerId: {
      type: DataTypes.UUID,
      references: {
        model: Seller,
        key: 'seller_id'
      }
    }
  })
  return Product
}
