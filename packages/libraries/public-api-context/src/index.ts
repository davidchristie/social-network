import { ContextCallback } from "graphql-yoga/dist/types";

import account from "./account";
import database from "./database";
import { Context } from "./types";

export function createContext (): ContextCallback {
  return async ({ request }): Promise<Context> => {
    return {
      account: await account(request),
      database,
      request,
    };
  };
}
