import { Account } from "data-model";
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

interface UpdatePasswordInput {
  accountId: string;
  currentPassword: string;
  newPassword: string;
}

type AccountOutput = Promise<Account>;

type LoginOutput = Promise<{
  token: string;
}>;

type SignupOutput = Promise<{
  token: string;
}>;

async function postToAuthentication (endpoint: string, data: any): Promise<any> {
  const response = await fetch(
    `${path}${endpoint}`,
    {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
    },
  );
  return response.json();
}

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
    const output: LoginOutput = await postToAuthentication("/login", input);
    return output;
  },
  async signup (input: SignupInput) {
    const output: SignupOutput = await postToAuthentication("/signup", input);
    return output;
  },
  async updatePassword (input: UpdatePasswordInput) {
    const response = await fetch(
      `${path}/update_password`,
      {
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      },
    );
    if (response.status !== 200) {
      throw new Error("Error updating password");
    }
  },
};
