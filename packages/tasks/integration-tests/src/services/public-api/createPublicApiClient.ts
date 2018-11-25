import ApolloClient from "apollo-boost";
import fetch from "node-fetch";

import { PUBLIC_API_HOST } from "../../constants/hosts";

interface Options {
  token?: string;
}

export default function createPublicApiClient (
  { token }: Options = {}
): ApolloClient<{}> {
  const headers: any = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return new ApolloClient({
    fetch,
    headers,
    uri: PUBLIC_API_HOST,
  } as any);
}
