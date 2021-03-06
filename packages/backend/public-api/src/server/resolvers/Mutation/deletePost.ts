import { Context } from "../../context";

interface Arguments {
  id: string;
}

export default async function deletePost (
  { },
  { id }: Arguments,
  context: Context
) {
  const canDeletePost = await context.database.$exists.post({
    AND: [
      {
        id,
      },
      {
        createdBy: {
          account: {
            id: await context.accountId,
          },
        },
      },
    ],
  });
  console.log("canDeletePost", canDeletePost);
  if (!canDeletePost) {
    throw new Error(`Post not found or you are not the author`);
  }
  return context.database.deletePost({ id });
}
