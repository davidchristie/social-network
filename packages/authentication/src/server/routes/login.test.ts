import bodyParser from "body-parser"
import express from 'express'
import request from 'supertest'

import getHash from '../../utilities/getHash'
import login from './login'
import getToken from "../../utilities/getToken";

jest.mock('../../services/prisma', () => ({
  query: {
    account: jest.fn()
  }
}))

describe('GET /login', () => {
  describe('without email and password', () => {
    it('returns status code 200', done => {
      const server = express()
      server.use(login)
      request(server)
        .post('/')
        .expect(500)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.text).toEqual("Cannot read property 'email' of undefined")
          done()
        })
    })
  })

  describe('if no account matches email', () => {
    const UNKNOWN_EMAIL = "unknown@email.com"

    it('returns status code 404', done => {
      const server = express()
      server.use(bodyParser.json())
      server.use(login)
      request(server)
        .post('/')
        .send({
          email: UNKNOWN_EMAIL,
          password: 'xxxxxxxx',
        })
        .expect(404)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.text).toEqual(`No account found for email: ${UNKNOWN_EMAIL}`)
          done()
        })
    })
  })

  describe('with incorrect password', () => {
    const account = {
      email: 'user@email.com',
      id: 'xxxx-xxxx-xxxx-xxxx',
      name: 'User',
      password: 'password123',
      profile: null,
    }

    it('returns status code 422', async done => {
      require('../../services/prisma').query.account.mockReturnValueOnce({
        id: account.id,
        password: await getHash(account.password)
      })
      const server = express()
      server.use(bodyParser.json())
      server.use(login)
      request(server)
        .post('/')
        .send({
          email: 'user@email.com',
          password: 'wrong_password',
        })
        .expect(422)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.text).toEqual("Invalid password")
          done()
        })
    })
  })

  describe('with correct password', () => {
    const account = {
      email: 'user@email.com',
      id: 'xxxx-xxxx-xxxx-xxxx',
      name: 'User',
      password: 'password123',
      profile: null,
    }

    it('returns access token', async done => {
      require('../../services/prisma').query.account.mockReturnValueOnce({
        id: account.id,
        password: await getHash(account.password)
      })
      const server = express()
      server.use(bodyParser.json())
      server.use(login)
      request(server)
        .post('/')
        .send({
          email: 'user@email.com',
          password: account.password,
        })
        .expect(200)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.body).toEqual({
            token: getToken(account)
          })
          done()
        })
    })
  })
})
