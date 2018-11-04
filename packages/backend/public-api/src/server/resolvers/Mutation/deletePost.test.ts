import { Context } from "public-api-context";

import deletePostResolver from "./deletePost";

describe("deletePost mutation resolver", () => {
  describe("if the post exists and was created by user", () => {
    it("deletes the post", async () => {
      const deletePost = jest.fn();
      const postId = "post_id";
      const text = "post_text";
      const context = {
        database: {
          $exists: {
            post: () => Promise.resolve(true),
          },
          deletePost,
        },
      } as unknown as Context;
      await deletePostResolver(null, { id: postId }, context);
      expect(deletePost).toBeCalledWith({
        id: postId,
      });
    });
  });

  describe("if the post doesn't exist or was not created by user", () => {
    it("throws an error", async () => {
      const promise = async () => {
        const deletePost = jest.fn();
        const postId = "post_id";
        const context = {
          database: {
            $exists: {
              post: () => Promise.resolve(false),
            },
            deletePost,
          },
        } as unknown as Context;
        await deletePostResolver(null, { id: postId }, context);
      };
      await expect(promise()).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
