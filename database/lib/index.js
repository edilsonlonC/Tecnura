'use strict'
const ModelSeller = require('../../models/seller')()
const ModelProduct = require('../../models/product')()
const ModelBuyer = require('../../models/buyer')()
const ModelOrder = require('../../models/order')()

const debug = require('debug')('tecnura:db')
const { DataTypes } = require('sequelize')
module.exports = function () {
  ModelSeller.hasMany(ModelProduct, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'SellerId'
    }
  })
  ModelProduct.belongsTo(ModelSeller, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'SellerId'
    }
  })
  ModelSeller.hasMany(ModelOrder, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'SellerId'
    }
  })
  ModelOrder.belongsTo(ModelSeller, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'SellerId'
    }
  })
  ModelBuyer.hasMany(ModelOrder, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'BuyerId'
    }
  })
  ModelOrder.belongsTo(ModelBuyer, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'BuyerId'
    }
  })
  ModelProduct.hasMany(ModelOrder, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'ProductId'
    }
  })
  ModelOrder.belongsTo(ModelProduct, {
    foreignKey: {
      type: DataTypes.UUID,
      name: 'ProductId'
    }
  })

  debug('relations created')
  return {
    ModelProduct,
    ModelSeller,
    ModelBuyer,
    ModelOrder
  }
}
