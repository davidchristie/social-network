import { Context } from "../../context";
import followProfileResolver from "./followProfile";

describe("followProfile mutation resolver", () => {
  it("follows the specified profile", async () => {
    const accountProfileId = "account_profile_id";
    const followedProfileId = "followed_profile_id";
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
    await followProfileResolver({}, { id: followedProfileId }, context);
    expect(updateProfile).toBeCalledWith({
      data: {
        following: {
          connect: {
            id: followedProfileId,
          },
        },
      },
      where: {
        id: accountProfileId,
      },
    });
  });
});
