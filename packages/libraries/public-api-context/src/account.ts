import { Account } from "data-model";
import { Request } from "express";
import fetch from "node-fetch";

const AUTHENTICATION_HOST = process.env.AUTHENTICATION_ENDPOINT;

export default async function account (request: Request): Promise<Account> {
  const response = await fetch(
    `${AUTHENTICATION_HOST}/account`,
    {
      headers: {
        Authorization: request.get("Authorization"),
      },
    },
  );
  return response.json();
}
