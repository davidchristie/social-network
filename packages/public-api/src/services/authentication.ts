import { Request } from "express";
import fetch from "node-fetch";

const path = process.env.AUTHENTICATION_ENDPOINT;

interface LoginInput {
  email: string;
  password: string;
}

interface SignupInput {
  email: string;
  name: string;
  password: string;
}

type AccountOutput = Promise<{
  id: string;
}>;

type LoginOutput = Promise<{
  token: string;
}>;

type SignupOutput = Promise<{
  token: string;
}>;

export default {
  async account (request: Request) {
    const response = await fetch(
      `${path}/account`,
      {
        headers: {
          Authorization: request.get("Authorization"),
        },
      },
    );
    return response.json() as AccountOutput;
  },
  async login (input: LoginInput) {
    const response = await fetch(
      `${path}/login`,
      {
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      },
    );
    return response.json() as LoginOutput;
  },
  async signup (input: SignupInput) {
    const response = await fetch(
      `${path}/signup`,
      {
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      },
    );
    return response.json() as SignupOutput;
  },
};
