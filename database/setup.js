'use strict'

const { Sequelize } = require('sequelize')

let sequelize = null

const env = process.env.NODE_ENV
const config = require('../config/config')[env]
function main () {
  const { database, host, username, password } = config
  if (!sequelize) {
    sequelize = new Sequelize(database, username, password, {
      dialect: 'postgres',
      host
    })
  }
  return sequelize
}

module.exports = main
