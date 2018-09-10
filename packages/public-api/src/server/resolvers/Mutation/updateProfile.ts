import { ProfileUpdateInput } from "data-model";

import { Context } from "../../../types";

interface Arguments {
  data: ProfileUpdateInput;
}

export default async function updateProfile (
  { },
  { data }: Arguments,
  context: Context
) {
  const [profile] = await context.database.query.profiles({
    where: {
      account: {
        id: context.account.id,
      },
    },
  });
  return context.database.mutation.updateProfile({
    data,
    where: {
      id: profile.id,
    },
  });
}
