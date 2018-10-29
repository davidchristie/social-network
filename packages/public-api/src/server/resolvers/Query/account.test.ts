import { Context } from "../../../types";
import accountQueryResolver from "./account";

const response = {} as Response;

jest.mock("node-fetch", () => () => response);

describe("account query resolver", () => {
  describe("with valid authentication", () => {
    beforeEach(() => {
      response.json = () => Promise.resolve({
        id: "account_id",
      });
    });

    it("returns account", async () => {
      const result = {};
      const queryAccount = jest.fn();
      queryAccount.mockResolvedValueOnce(result);
      const context = {
        database: {
          query: {
            account: queryAccount,
          },
        },
        request: {
          get: jest.fn(),
        },
      } as unknown as Context;
      expect(await accountQueryResolver(null, null, context, null))
        .toBe(result);
    });
  });

  describe("without valid authentication", () => {
    beforeEach(() => {
      response.json = () => Promise.resolve({
        id: null,
      });
    });

    it("returns null", async () => {
      const queryAccount = jest.fn();
      queryAccount.mockResolvedValueOnce(null);
      const context = {
        database: {
          query: {
            account: queryAccount,
          },
        },
        request: {
          get: jest.fn(),
        },
      } as unknown as Context;
      expect(await accountQueryResolver(null, null, context, null))
        .toBe(null);
    });
  });
});
