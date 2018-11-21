import { Context } from "../../context";

import {
  ProfileUpdateInput,
  ProfileUpdateManyWithoutFollowersInput,
  ProfileUpdateManyWithoutFollowingInput
} from "data-model";

interface Arguments {
  data: {
    avatarUrl?: string;
    followers?: ProfileUpdateManyWithoutFollowingInput;
    following?: ProfileUpdateManyWithoutFollowersInput;
    name?: string;
  };
}

export default async function updateProfile (
  { },
  { data: { avatarUrl, followers, following, name } }: Arguments,
  context: Context
) {
  const profile = context.database
    .account({
      id: context.accountId,
    })
    .profile();
  const data: ProfileUpdateInput = {
    followers,
    following,
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
      id: await profile.id(),
    },
  });
}
