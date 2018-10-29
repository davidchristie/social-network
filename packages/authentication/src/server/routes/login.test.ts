import { postToRouter } from "test-utilities/express";

import {
  mockQueryAccountError,
  mockQueryAccountOnce
} from "../../testing/mockPrisma";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";
import login from "./login";

describe("POST /login", () => {
  describe("if no account matches email", () => {
    const UNKNOWN_EMAIL = "unknown@email.com";

    it("returns status code 404", () => postToRouter({
      data: {
        email: UNKNOWN_EMAIL,
        password: "xxxxxxxx",
      },
      expect: {
        status: 404,
        text: `No account found for email: ${UNKNOWN_EMAIL}`,
      },
      router: login,
    }));
  });

  describe("with incorrect password", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    };

    beforeEach(async () => {
      mockQueryAccountOnce({
        id: account.id,
        password: await getHash(account.password),
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns status code 422", () => postToRouter({
      data: {
        email: "user@email.com",
        password: "wrong_password",
      },
      expect: {
        status: 422,
        text: "Invalid password",
      },
      router: login,
    }));
  });

  describe("with correct password", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    };

    beforeEach(async () => {
      mockQueryAccountOnce({
        id: account.id,
        password: await getHash(account.password),
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns access token", () => postToRouter({
      data: {
        email: "user@email.com",
        password: account.password,
      },
      expect: {
        body: {
          token: getToken(account),
        },
        status: 200,
      },
      router: login,
    }));
  });

  describe("with Prisma error", () => {
    const ERROR_MESSAGE = "Test error";

    beforeEach(() => {
      mockQueryAccountError(new Error(ERROR_MESSAGE));
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns status code 500", () => {
      return postToRouter({
        data: {},
        expect: {
          status: 500,
          text: ERROR_MESSAGE,
        },
        router: login,
      });
    });
  });
});
