import { Context } from "public-api-context";

export default function account ({ }, { }, context: Context) {
  const { accountId } = context;
  if (accountId) {
    return context.database.account({
      id: context.accountId,
    });
  }
  return null;
}
