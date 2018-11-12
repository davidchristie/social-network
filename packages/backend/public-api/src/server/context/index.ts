import { ContextCallback } from "graphql-yoga/dist/types";

import database from "./database";
import getAccountId from "./getAccountId";
import { services } from "./services";
import { Context } from "./types";

export * from "./types";

export function createContext (): ContextCallback {
  return async ({ request }): Promise<Context> => {
    const accountId = await getAccountId(request);
    return {
      accountId,
      database,
      request,
      services,
    };
  };
}
