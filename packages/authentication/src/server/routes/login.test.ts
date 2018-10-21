import postToRouter from "../../testing/postToRouter";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";
import login from "./login";

jest.mock("../../services/prisma", () => ({
  query: {
    account: jest.fn()
  }
}));

describe("POST /login", () => {
  describe("if no account matches email", () => {
    const UNKNOWN_EMAIL = "unknown@email.com"

    it("returns status code 404", done => {
      postToRouter(login, {
        email: UNKNOWN_EMAIL,
        password: "xxxxxxxx",
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

  describe("with incorrect password", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    }

    it("returns status code 422", async done => {
      require("../../services/prisma").query.account.mockReturnValueOnce({
        id: account.id,
        password: await getHash(account.password)
      })
      postToRouter(login, {
        email: "user@email.com",
        password: "wrong_password",
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

  describe("with correct password", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    }

    it("returns access token", async done => {
      require("../../services/prisma").query.account.mockReturnValueOnce({
        id: account.id,
        password: await getHash(account.password)
      })
      postToRouter(login, {
        email: "user@email.com",
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

  describe("with Prisma error", () => {
    const ERROR_MESSAGE = "Test error"

    it("returns status code 500", done => {
      require("../../services/prisma").query.account
        .mockImplementationOnce(() => {
          throw new Error(ERROR_MESSAGE)
        })
      postToRouter(login, {})
        .expect(500)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.text).toEqual(ERROR_MESSAGE)
          done()
        })
    })
  })
})
