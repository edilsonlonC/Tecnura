let app = null
const request = require('supertest')
jest.mock('../models/product')
jest.mock('../models/seller')
const ModelProduct = require('../models/product')
const ModelSeller = require('../models/seller')

const mockSeller = {
  name: 'name for test',
  address: 'address for email',
  email: 'test@email.com',
  password: 'password email'
}

const responseSeller = {
  name: 'test name',
  email: 'test email',
  password: 'test password'
}
const respSeller = {
  toJSON: jest.fn(() => responseSeller)

}
const responseProduct = {
  name: 'product name',
  price: 2.4,
  sellerId: 1
}
const respProduct = {
  toJSON: jest.fn(() => responseProduct)
}

beforeAll(() => {
  const seller = {
    create: jest.fn((data) => Promise.resolve(respSeller))
  }

  const product = {
    create: jest.fn((data) => Promise.resolve(respProduct))
  }
  ModelSeller.mockImplementation(() => seller)
  ModelProduct.mockImplementation(() => product)
  app = require('../index')
})

describe('test routes', () => {
  test('testing user', () => {
    return request(app)
      .get('/api/user')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          message: 'Working',
          seller: responseSeller,
          product: responseProduct

        })
      })
  })

  test('testing seller', () => {
    return request(app).post('/api/seller')
      .send(mockSeller)
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body).toEqual({
          ok: true,
          seller: responseSeller
        })
      })
  })
})
