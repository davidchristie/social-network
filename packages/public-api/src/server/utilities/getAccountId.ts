import { verify } from "jsonwebtoken";

import { Context, JWT } from "../../types";

export default async function getAccountId (context: Context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { accountId } = verify(token, process.env.JWT_SECRET) as JWT;
    return accountId;
  }
  return null;
}
