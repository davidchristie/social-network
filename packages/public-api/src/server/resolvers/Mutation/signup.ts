import { Context } from "../../../types";
import getHash from "../../utilities/getHash";
import getToken from "../../utilities/getToken";

export default async function signup (
  { },
  {
    email,
    name,
    password,
  },
  context: Context,
) {
  const account = await context.database.mutation.createAccount(
    {
      data: {
        email,
        name,
        password: await getHash(password),
        profile: {
          create: {
            name,
          },
        },
      },
    },
  );
  return {
    token: getToken(account),
  };
}
