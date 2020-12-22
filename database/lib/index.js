'use strict'
const ModelSeller = require('../../models/seller')()
const ModelProduct = require('../../models/product')()
const debug = require('debug')('tecnura:db')
const { DataTypes } = require('sequelize')
module.exports = function () {
  debug('in lib')
  ModelSeller.hasMany(ModelProduct, {
    type: DataTypes.UUID,
    foreignKey: 'SellerId'
  })
  ModelProduct.belongsTo(ModelSeller, {
    type: DataTypes.UUID,
    foreignKey: 'SellerId'
  })
  return {
    ModelProduct,
    ModelSeller
  }
}
