import authentication from "../../../services/authentication";

export default async function signup ({ }, { email, name, password }) {
  return authentication.signup({
    email,
    name,
    password,
  });
}
