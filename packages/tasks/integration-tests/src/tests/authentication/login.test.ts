import request, { Test } from "supertest";

import { AUTHENTICATION_HOST } from "../../constants/hosts";
import { USER_1_EMAIL, USER_1_PASSWORD } from "../../constants/login";
import itReturnsStatusCode from "../../utilities/itReturnsStatusCode";

const url = `${AUTHENTICATION_HOST}/login`;

describe(`${AUTHENTICATION_HOST}/login`, () => {
  describe("GET", () => {
    describe("with valid credentials", () => {
      let withValidCredentials: Test;

      beforeEach(() => {
        withValidCredentials = request(url)
          .post("/")
          .send({
            email: USER_1_EMAIL,
            password: USER_1_PASSWORD,
          });
      });

      itReturnsStatusCode(() => withValidCredentials, 200);

      it("returns authentication token", done => {
        withValidCredentials
          .end((error, response) => {
            expect(typeof response.body.token).toBe("string");
            done();
          });
      });
    });
  });
});
