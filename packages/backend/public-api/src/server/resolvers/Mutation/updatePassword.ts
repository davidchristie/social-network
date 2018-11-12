import { Context } from "../../context";

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
    accountId: await context.accountId,
    currentPassword,
    newPassword,
  });
  return context.database.account({ id: context.accountId });
}
