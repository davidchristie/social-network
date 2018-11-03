import { Context } from "public-api-context";

import authentication from "../../../services/authentication";

export default async function account ({ }, { }, context: Context) {
  const { id } = await authentication.account(context.request);
  if (id) {
    return context.database.account({ id });
  }
  return null;
}
