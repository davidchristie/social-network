import { Context } from "../../context";

interface Arguments {
  id: string;
}

export default async function followProfile ({ }, { id }: Arguments, context: Context) {
  const profile = await context.database
    .account({
      id: context.accountId,
    })
    .profile();
  await context.database.updateProfile({
    data: {
      following: {
        connect: {
          id,
        },
      },
    },
    where: {
      id: profile.id,
    },
  });
  return context.database.profile({
    id,
  });
}
