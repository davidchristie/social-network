import { Page } from "puppeteer";
import request from "supertest";

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
      it("returns status code 200", done => {
        request(url)
          .get("/")
          .expect(200)
          .end(done);
      });

      it("returns null account ID", done => {
        request(url)
          .get("/")
          .expect(200)
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
