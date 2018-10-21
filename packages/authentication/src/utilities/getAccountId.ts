import { Request } from "express";
import { verify } from "jsonwebtoken";

import getJwtSecret from "./getJwtSecret";

export interface JWT {
  accountId: string;
}

export default async function getAccountId(request: Request) {
  const Authorization = request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { accountId } = verify(token, getJwtSecret()) as JWT;
    return accountId;
  }
  return null;
}
