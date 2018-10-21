import requestToRouter from '../../testing/requestToRouter'
import getToken from '../../utilities/getToken'
import account from './account'
import itReturnsNullAccountId from '../../testing/itReturnsNullAccountId';

describe('GET /account', () => {
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
        .expect('Content-Type', /json/)
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

  describe('with no authentication', () => {
    itReturnsNullAccountId(account)
  })

  describe('with invalid authentication', () => {
    itReturnsNullAccountId(account, 'INVALID_TOKEN')
  })
})
