import {
  mockCreateAccountOnce
} from "../../testing/mockPrisma";
import postToRouter from "../../testing/postToRouter";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";
import signup from "./signup";

describe("POST /signup", () => {
  describe("without email, name or password", () => {
    it("returns status code 400", done => {
      postToRouter(signup, {})
        .expect(400)
        .end((error, response) => {
          if (error) {
            throw error
          }
          expect(response.text).toEqual("Error creating account")
          done()
        });
    });
  });

  describe("with valid input", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    }

    it("returns access token", async done => {
      mockCreateAccountOnce({
        ...account,
        password: await getHash(account.password)
      })
      postToRouter(signup, {
        email: account.email,
        name: account.name,
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
