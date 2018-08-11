import { Context } from "../../../types";
import getToken from "../../utilities/getToken";
import isPassword from "../../utilities/isPassword";

export default async function login (
  { },
  {
    email,
    password,
  },
  context: Context,
) {
  const account = await context.database.query.account(
    {
      where: {
        email,
      },
    },
  );
  if (!account) {
    throw new Error(`No account found for email: ${email}`);
  }
  const valid = await isPassword(password, account);
  if (!valid) {
    throw new Error("Invalid password");
  }
  return {
    token: getToken(account),
  };
}
