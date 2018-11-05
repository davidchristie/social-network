import { Context } from "../../context";

import updateAccountResolver from "./updateAccount";

describe("updateAccount mutation resolver", () => {
  describe("if the post exists and was created by user", () => {
    it("deletes the post", async () => {
      const updateAccount = jest.fn();
      const newEmail = "new@email.com";
      const context = {
        accountId: "xxxx-xxxx-xxxx-xxxx",
        database: {
          updateAccount,
        },
      } as unknown as Context;
      await updateAccountResolver(null, { data: { email: newEmail } }, context);
      expect(updateAccount).toBeCalledWith({
        data: {
          email: newEmail,
        },
        where: {
          id: context.accountId,
        },
      });
    });
  });
});
