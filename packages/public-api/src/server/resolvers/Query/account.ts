import authentication from "../../../services/authentication";
import { Context } from "../../../types";

export default async function account ({ }, { }, context: Context, info) {
  const { id } = await authentication.account(context.request);
  if (id) {
    return context.database.query.account(
      {
        where: {
          id,
        },
      },
      info,
    );
  }
  return null;
}
