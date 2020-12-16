'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
const handler = require('./handlers/handlers')
const sellerRouter = require('./router/seller')

// database

const setup = require('./database/setup')

const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('*', (req, res, next) => {
  try {
    next()
  } catch (err) {
    next(err)
  }
})

// Should create middleware for router

app.use('/api', sellerRouter)

// handlers
app.get('*', handler.notFoundError)
// handler error
app.use(handler.serverError)

app.listen(port, async (err) => {
  if (err) return console.error(err)
  const sequelize = setup()
  await sequelize.sync({ force: true })
  console.log(`server is running on port ${port}`)
})
