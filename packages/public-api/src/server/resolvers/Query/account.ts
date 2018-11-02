import { Context } from "public-api-context";

import authentication from "../../../services/authentication";

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
