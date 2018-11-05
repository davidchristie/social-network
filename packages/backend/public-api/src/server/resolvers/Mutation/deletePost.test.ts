import { Context } from "../../context";

import deletePostResolver from "./deletePost";

function createMockContext (deletePost: () => void, canDeletePost: boolean) {
  const context = {
    database: {
      $exists: {
        post: () => Promise.resolve(canDeletePost),
      },
      deletePost,
    },
  } as unknown as Context;
  return context;
}

describe("deletePost mutation resolver", () => {
  describe("if the post exists and was created by user", () => {
    it("deletes the post", async () => {
      const deletePost = jest.fn();
      const postId = "post_id";
      const context = createMockContext(deletePost, true);
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
        const context = createMockContext(deletePost, false);
        await deletePostResolver(null, { id: postId }, context);
      };
      await expect(promise()).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
