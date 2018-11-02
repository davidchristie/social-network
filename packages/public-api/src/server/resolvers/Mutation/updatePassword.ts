import { Context } from "public-api-context";

import authentication from "../../../services/authentication";

interface Arguments {
  data: {
    currentPassword: string;
    newPassword: string;
  };
}

export default async function updatePassword (
  { },
  { data: { currentPassword, newPassword } }: Arguments,
  context: Context
) {
  await authentication.updatePassword({
    accountId: context.account.id,
    currentPassword,
    newPassword,
  });
  return {
    id: context.account.id,
  };
}
