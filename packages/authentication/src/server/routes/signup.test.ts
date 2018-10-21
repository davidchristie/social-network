import bodyParser from "body-parser";
import express from "express";
import request from "supertest";

import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";
import signup from "./signup";

jest.mock("../../services/prisma", () => ({
  mutation: {
    createAccount: jest.fn()
  }
}));

describe("GET /signup", () => {
  describe("without email, name or password", () => {
    it("returns status code 400", done => {
      const server = express()
      server.use(signup)
      request(server)
        .post("/")
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
      require("../../services/prisma").mutation.createAccount.mockReturnValueOnce({
        ...account,
        password: await getHash(account.password)
      })
      const server = express()
      server.use(bodyParser.json())
      server.use(signup)
      request(server)
        .post("/")
        .send({
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
