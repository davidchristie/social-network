import { Context } from "../../../types";
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
    itReturnsExpectedResult(
      "returns null",
      {
        id: null,
      },
      null
    );
  });
});
