import { Context } from "../../../types";
import getAccountId from "../../utilities/getAccountId";

export default async function account ({ }, { }, context: Context, info) {
  const accountId = await getAccountId(context);
  if (accountId) {
    return context.database.query.account(
      {
        where: {
          id: accountId,
        },
      },
      info,
    );
  }
  return null;
}
