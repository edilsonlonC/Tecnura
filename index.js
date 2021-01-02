'use strict'
const debug = require('debug')('tecnura')
const express = require('express')
const app = express()
const morgan = require('morgan')
const handler = require('./handlers/handlers')
const sellerRouter = require('./router/seller')
const buyerRouter = require('./router/buyer')
const productRouter = require('./router/product')
const orderRouter = require('./router/order')
const loginRouter = require('./router/login')
// const cors = require('cors')
// database

const setup = require('./database/setup')

const port = process.env.PORT || 8080

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
// app.use(cors)

app.use('*', (req, res, next) => {
  try {
    next()
  } catch (err) {
    next(err)
  }
})

// Should create middleware for router

app.use('/api', sellerRouter)
app.use('/api', buyerRouter)
app.use('/api', productRouter)
app.use('/api', orderRouter)
app.use('/api', loginRouter)
// test for nginx

app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'ok in nginx =)'
  })
})
// handlers
app.get('*', handler.notFoundError)
// handler error

app.use(handler.serverError)

if (!module.parent) {
  app.listen(port, async (err) => {
    if (err) return debug(err)
    const sequelize = setup()
    debug('sync server')
    await sequelize.sync({ alter: true })

    debug('listening')
    debug(`server is running on port ${port}`)
  })
} else module.exports = app
