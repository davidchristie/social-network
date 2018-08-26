import { Request } from "express";
import { verify } from "jsonwebtoken";

export interface JWT {
  accountId: string;
}

export default async function getAccountId (request: Request) {
  const Authorization = request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { accountId } = verify(token, process.env.JWT_SECRET) as JWT;
    return accountId;
  }
  return null;
}
