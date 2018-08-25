import { sign } from "jsonwebtoken";

import { Account } from "../../generated/prisma";

export default function getToken (account: Account) {
  return sign({ accountId: account.id }, process.env.JWT_SECRET);
}
