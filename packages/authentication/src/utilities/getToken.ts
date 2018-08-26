import { Account } from "data-model";
import { sign } from "jsonwebtoken";

export default function getToken (account: Account) {
  return sign({ accountId: account.id }, process.env.JWT_SECRET);
}
