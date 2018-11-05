import { Context } from "../../context";

import profileQueryResolver from "./profile";

describe("profile query resolver", () => {
  it("returns the profile", async () => {
    const input = {
      id: "profile_id",
    };
    const result = {};
    const queryProfile = jest.fn();
    queryProfile.mockResolvedValueOnce(result);
    const context = {
      database: {
        profile: queryProfile,
      },
    } as unknown as Context;
    expect(await profileQueryResolver(null, input, context))
      .toBe(result);
  });
});
