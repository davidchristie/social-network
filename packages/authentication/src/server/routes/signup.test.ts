import itReturnsStatusCode from "../../testing/itReturnsStatusCode";
import {
  mockCreateAccountOnce
} from "../../testing/mockPrisma";
import postToRouter from "../../testing/postToRouter";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";
import signup from "./signup";

describe("POST /signup", () => {
  describe("without email, name or password", () => {
    itReturnsStatusCode(signup, 400);
  });

  describe("with valid input", () => {
    const account = {
      email: "user@email.com",
      id: "xxxx-xxxx-xxxx-xxxx",
      name: "User",
      password: "password123",
      profile: null,
    };

    beforeEach(async () => {
      mockCreateAccountOnce({
        ...account,
        password: await getHash(account.password),
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns access token", () => postToRouter({
      data: {
        email: account.email,
        name: account.name,
        password: account.password,
      },
      expect: {
        body: {
          token: getToken(account),
        },
        status: 200,
      },
      router: signup,
    }));
  });
});
