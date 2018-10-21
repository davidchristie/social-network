import { Account } from "data-model";
import { sign } from "jsonwebtoken";

import getJwtSecret from "./getJwtSecret";

export default function getToken(account: Account) {
  return sign({ accountId: account.id }, getJwtSecret());
}
