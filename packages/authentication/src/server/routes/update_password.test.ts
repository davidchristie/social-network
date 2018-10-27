import {
  mockQueryAccountOnce,
  mockUpdateAccountOnce
} from "../../testing/mockPrisma";
import postToRouter from "../../testing/postToRouter";
import getHash from "../../utilities/getHash";
import update_password from "./update_password";

const account = {
  email: "user@email.com",
  id: "xxxx-xxxx-xxxx-xxxx",
  name: "User",
  password: "password123",
  profile: null,
};

describe("POST /update_password", () => {
  describe("with no input", () => {
    it("returns status code 400", () => postToRouter({
      data: {},
      expect: {
        status: 404,
        text: "No account found for ID: undefined",
      },
      router: update_password,
    }));
  });

  describe("with wrong password", () => {
    beforeEach(async () => {
      mockQueryAccountOnce({
        ...account,
        password: "wrong_password",
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns status code 422", () => postToRouter({
      data: {
        accountId: account.id,
        currentPassword: account.password,
        newPassword: "new_password",
      },
      expect: {
        status: 422,
        text: "Invalid current password",
      },
      router: update_password,
    }));
  });

  describe("with valid input", () => {
    const newPassword = "new_password";

    beforeEach(async () => {
      mockQueryAccountOnce({
        ...account,
        password: await getHash(account.password),
      });
      mockUpdateAccountOnce({
        ...account,
        password: newPassword,
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("returns status code 200", () => postToRouter({
      data: {
        accountId: account.id,
        currentPassword: account.password,
        newPassword: "new_password",
      },
      expect: {
        status: 200,
      },
      router: update_password,
    }));
  });
});
