import { compare } from "bcryptjs";

import { Account } from "../../generated/prisma";

export default function isPassword (password, account: Account) {
  return compare(password, account.password);
}
