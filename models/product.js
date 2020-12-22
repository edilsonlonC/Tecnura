'use strict'

const setup = require('../database/setup')
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
    }

  })
  return Product
}
