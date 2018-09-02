import { Context } from "../../../types";

interface Arguments {
  text: string;
}

export default async function createPost (
  { },
  { text }: Arguments,
  context: Context) {
  const [profile] = await context.database.query.profiles({
    where: {
      account: {
        id: context.account.id,
      },
    },
  });
  return context.database.mutation.createPost({
    data: {
      createdBy: {
        connect: {
          id: profile.id,
        },
      },
      text,
    },
  });
}
