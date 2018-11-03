import { Context } from "public-api-context";

interface Arguments {
  text: string;
}

export default async function createPost (
  { },
  { text }: Arguments,
  context: Context
) {
  const profile = context.database
    .account({
      id: context.accountId,
    })
    .profile();
  return context.database.createPost({
    createdBy: {
      connect: {
        id: await profile.id(),
      },
    },
    text,
  });
}
