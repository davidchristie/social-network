import { Context } from "../../../types";

interface Arguments {
  id: string;
}

export default async function deletePost (
  { },
  { id }: Arguments,
  context: Context
) {
  const canDeletePost = await context.database.exists.Post({
    AND: [
      {
        id,
      },
      {
        createdBy: {
          account: {
            id: context.account.id,
          },
        },
      },
    ],
  });
  if (!canDeletePost) {
    throw new Error(`Post not found or you are not the author`);
  }
  return context.database.mutation.deletePost({
    where: {
      id,
    },
  });
}
