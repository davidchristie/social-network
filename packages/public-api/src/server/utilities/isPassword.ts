import { compare } from "bcryptjs";
import { Account } from "data-model";

export default function isPassword (password, account: Account) {
  return compare(password, account.password);
}
