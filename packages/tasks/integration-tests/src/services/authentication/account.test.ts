import request, { Test } from "supertest";
import { AUTHENTICATION_HOST } from "../../constants/hosts";
import { USER_1_TOKEN } from "../../constants/login";
import expectBodyPropertyToBeAString from "../../utilities/expectBodyPropertyToBeAString";
import itReturnsStatusCode from "../../utilities/itReturnsStatusCode";

const url = `${AUTHENTICATION_HOST}/account`;

export function itReturnsNullAccountId (getRequest: () => Test) {
  it("returns null account ID", done => {
    getRequest()
      .end((error, response) => {
        expect(response.body).toEqual({
          id: null,
        });
        done();
      });
  });
}

describe(`${AUTHENTICATION_HOST}/account`, () => {
  describe("GET", () => {
    describe("without authentication header", () => {
      let withoutAuthentication: Test;

      beforeEach(() => {
        withoutAuthentication = request(url)
          .get("/");
      });

      itReturnsStatusCode(() => withoutAuthentication, 200);

      itReturnsNullAccountId(() => withoutAuthentication);
    });

    describe("with invalid authentication header", () => {
      let withInvalidAuthentication: Test;

      beforeEach(() => {
        withInvalidAuthentication = request(url)
          .get("/")
          .set("Authorization", "Bearer invalid_token");
      });

      itReturnsStatusCode(() => withInvalidAuthentication, 200);

      itReturnsNullAccountId(() => withInvalidAuthentication);
    });

    describe("with valid authentication header", () => {
      let withValidAuthentication: Test;

      beforeEach(() => {
        withValidAuthentication = request(url)
          .get("/")
          .set("Authorization", `Bearer ${USER_1_TOKEN}`);
      });

      itReturnsStatusCode(() => withValidAuthentication, 200);

      it("returns account ID", () => {
        return expectBodyPropertyToBeAString(
          withValidAuthentication,
          "id"
        );
      });
    });
  });
});
