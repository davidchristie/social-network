import { Context } from "../../context";

import { ProfileUpdateInput } from "data-model";

interface Arguments {
  data: {
    avatarUrl?: string;
    name?: string;
  };
}

export default async function updateProfile (
  { },
  { data: { avatarUrl, name } }: Arguments,
  context: Context
) {
  const profile = context.database
    .account({
      id: context.accountId,
    })
    .profile();
  const data: ProfileUpdateInput = {
    name,
  };
  if (avatarUrl) {
    data.avatar = {
      create: {
        url: avatarUrl,
      },
    };
  }
  if (avatarUrl === null) {
    data.avatar = {
      delete: true,
    };
  }
  return context.database.updateProfile({
    data,
    where: {
      id: await profile.id,
    },
  });
}
