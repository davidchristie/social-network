import { Context } from "public-api-context";

import createPostResolver from "./createPost";

describe("createPost mutation resolver", () => {
  it("connects post to the account profile", async () => {
    const createPost = jest.fn();
    const profileId = "profile_id";
    const text = "post_text";
    const context = {
      database: {
        account: () => ({
          profile: () => ({
            id: () => Promise.resolve(profileId),
          }),
        }),
        createPost,
      },
    } as unknown as Context;
    await createPostResolver(null, { text }, context);
    expect(createPost).toBeCalledWith({
      createdBy: {
        connect: {
          id: profileId,
        },
      },
      text,
    });
  });
});
