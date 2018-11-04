import { Context } from "public-api-context";

import accountQueryResolver from "./account";

const response = {} as Response;

jest.mock("node-fetch", () => () => response);

function itReturnsExpectedResult (
  name: string,
  authenticationData: any,
  queryResult: any,
) {
  beforeEach(() => {
    response.json = () => Promise.resolve(
      authenticationData
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(name, async () => {
    const queryAccount = jest.fn();
    queryAccount.mockResolvedValueOnce(queryResult);
    const context = {
      accountId: "xxxx-xxxx-xxxx-xxxx",
      database: {
        account: queryAccount,
      },
      request: {
        get: jest.fn(),
      },
    } as unknown as Context;
    expect(await accountQueryResolver(null, null, context))
      .toBe(queryResult);
  });
}

describe("account query resolver", () => {
  describe("with valid authentication", () => {
    itReturnsExpectedResult(
      "returns account",
      {
        id: "account_id",
      },
      {}
    );
  });

  describe("without valid authentication", () => {
    it("returns null", () => {
      const context = {
        accountId: null,
      } as Context;
      const result = accountQueryResolver(null, null, context);
      expect(result).toBeNull();
    });
  });
});
