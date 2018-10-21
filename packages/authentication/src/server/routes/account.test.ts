import requestToRouter from '../../testing/requestToRouter'
import getToken from '../../utilities/getToken'
import account from './account'

describe('GET /account', () => {
  describe('without authentication', () => {
    it('returns null account ID', done => {
      requestToRouter(account)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.body).toEqual({
            id: null
          })
          done()
        })
    })
  })

  describe('with authentication', () => {
    const ACCOUNT_ID = 'xxxx-xxxx-xxxx-xxxx'

    it('returns account ID', done => {
      const token = getToken({
        email: 'user@email.com',
        id: ACCOUNT_ID,
        name: 'User',
        password: 'xxxxxxxx',
        profile: null
      })
      requestToRouter(account)
        .get('/')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.body).toEqual({
            id: ACCOUNT_ID
          })
          done()
        })
    })
  })

  describe('with invalid authentication', () => {
    it('returns null account ID', done => {
      requestToRouter(account)
        .get('/')
        .set('Authorization', 'Bearer INVALID_TOKEN')
        .expect(200)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.body).toEqual({
            id: null
          })
          done()
        })
    })
  })
})