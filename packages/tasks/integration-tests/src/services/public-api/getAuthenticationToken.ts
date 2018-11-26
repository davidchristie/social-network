import request from "supertest";
import { AUTHENTICATION_HOST } from "../../constants/hosts";

interface Arguments {
  email: string;
  password: string;
}

export default async function getAuthenticationToken (
  { email, password }: Arguments
) {
  return new Promise<string>(resolve => {
    const url = `${AUTHENTICATION_HOST}/login`;
    request(url)
      .post("/")
      .send({
        email,
        password,
      })
      .expect(200)
      .end((error, response) => {
        const { token } = response.body;
        expect(error).toBeNull();
        expect(token).toBeDefined();
        resolve(token);
      });
  });
}
