import { Context } from "../../context";

interface Arguments {
  data: {
    email?: string;
  };
}

export default async function updateAccount (
  { },
  { data: { email } }: Arguments,
  context: Context
) {
  return context.database.updateAccount({
    data: {
      email,
    },
    where: {
      id: await context.accountId,
    },
  });
}
