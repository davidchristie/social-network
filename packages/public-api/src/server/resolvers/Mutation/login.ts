import authentication from "../../../services/authentication";

export default async function login ({ }, { email, password }) {
  return authentication.login({
    email,
    password,
  });
}
