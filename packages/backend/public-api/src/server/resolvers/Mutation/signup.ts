import { Context } from "../../context";

export default async function signup ({ }, { email, name, password }, context: Context) {
  return context.services.authentication.signup({
    email,
    name,
    password,
  });
}
