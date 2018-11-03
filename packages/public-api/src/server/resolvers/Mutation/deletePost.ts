import { Context } from "public-api-context";

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
            id: await context.account.id(),
          },
        },
      },
    ],
  });
  if (!canDeletePost) {
    throw new Error(`Post not found or you are not the author`);
  }
  return context.database.deletePost({ id });
}
