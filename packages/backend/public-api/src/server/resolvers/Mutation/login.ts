import { Context } from "../../context";

export default async function login ({ }, { email, password }, context: Context) {
  return context.services.authentication.login({
    email,
    password,
  });
}
