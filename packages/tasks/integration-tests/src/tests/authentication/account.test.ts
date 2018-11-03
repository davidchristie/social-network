import { Page } from "puppeteer";
import request, { Test } from "supertest";

import { AUTHENTICATION_HOST } from "../../constants/hosts";
import itReturnsStatusCode from "../../utilities/itReturnsStatusCode";
import newPage from "../../utilities/newPage";

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
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
  });

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
  });
});
