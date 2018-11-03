import { Context } from "public-api-context";

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
  const [profile] = await context.database.profiles({
    where: {
      account: {
        id: context.account.id,
      },
    },
  });
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
      id: profile.id,
    },
  });
}
