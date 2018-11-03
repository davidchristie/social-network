import { Page } from "puppeteer";
import request, { Test } from "supertest";

import { AUTHENTICATION_HOST } from "../../constants/hosts";
import newPage from "../../utilities/newPage";

const url = `${AUTHENTICATION_HOST}/account`;

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

      it("returns status code 200", done => {
        withoutAuthentication
          .expect(200)
          .end(done);
      });

      it("returns null account ID", done => {
        withoutAuthentication
          .end(async (error, response) => {
            expect(response.body).toEqual({
              id: null,
            });
            done();
          });
      });
    });

    describe("with invalid authentication header", () => {
      let withInvalidAuthentication: Test;

      beforeEach(() => {
        withInvalidAuthentication = request(url)
          .get("/")
          .set("Authorization", "Bearer invalid_token");
      });

      it("returns status code 200", done => {
        withInvalidAuthentication
          .expect(200)
          .end(done);
      });

      it("returns null account ID", done => {
        withInvalidAuthentication
          .end(async (error, response) => {
            expect(response.body).toEqual({
              id: null,
            });
            done();
          });
      });
    });
  });
});
