import { Context } from "../../../types";

interface Arguments {
  data: {
    email?: string;
  };
}

export default async function updateProfile (
  { },
  { data: { email } }: Arguments,
  context: Context
) {
  return context.database.mutation.updateAccount({
    data: {
      email,
    },
    where: {
      id: context.account.id,
    },
  });
}
