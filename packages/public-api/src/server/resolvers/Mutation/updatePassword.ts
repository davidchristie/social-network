import authentication from "../../../services/authentication";
import { Context } from "../../../types";

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
