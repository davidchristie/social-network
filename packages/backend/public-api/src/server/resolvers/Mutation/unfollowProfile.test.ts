import { Context } from "../../context";
import unfollowProfileResolver from "./unfollowProfile";

describe("unfollowProfile mutation resolver", () => {
  it("unfollows the specified profile", async () => {
    const accountProfileId = "account_profile_id";
    const unfollowedProfileId = "unfollowed_profile_id";
    const updateProfile = jest.fn();
    const context = {
      database: {
        account: () => ({
          profile: () => Promise.resolve({
            id: accountProfileId,
          }),
        }),
        profile: ({ id }) => Promise.resolve({
          id,
        }),
        updateProfile,
      },
    } as unknown as Context;
    await unfollowProfileResolver({}, { id: unfollowedProfileId }, context);
    expect(updateProfile).toBeCalledWith({
      data: {
        following: {
          disconnect: {
            id: unfollowedProfileId,
          },
        },
      },
      where: {
        id: accountProfileId,
      },
    });
  });
});
