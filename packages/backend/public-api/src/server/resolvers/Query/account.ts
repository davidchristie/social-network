import { Context } from "public-api-context";

export default function account ({ }, { }, context: Context) {
  console.log("account resolver");
  console.log("account ID", context.accountId);
  const { accountId } = context;
  if (accountId) {
    return context.database.account({
      id: context.accountId,
    });
  }
  return null;
}
