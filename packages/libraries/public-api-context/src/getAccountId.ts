import { Request } from "express";
import fetch from "node-fetch";

const AUTHENTICATION_HOST = process.env.AUTHENTICATION_ENDPOINT;

export default async function getAccountId (
  request: Request
): Promise<string | null> {
  const response = await fetch(
    `${AUTHENTICATION_HOST}/account`,
    {
      headers: {
        Authorization: request.get("Authorization"),
      },
    },
  );
  const { id } = await response.json();
  return id;
}
