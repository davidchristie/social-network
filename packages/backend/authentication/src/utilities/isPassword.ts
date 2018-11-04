import { compare } from "bcryptjs";
import { AccountNode } from "data-model";

export default function isPassword (password, account: AccountNode) {
  return compare(password, account.password);
}
