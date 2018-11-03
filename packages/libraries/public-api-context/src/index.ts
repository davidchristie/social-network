import { ContextCallback } from "graphql-yoga/dist/types";

import database from "./database";
import getAccountId from "./getAccountId";
import { Context } from "./types";

export * from "./types";

export function createContext (): ContextCallback {
  return async ({ request }): Promise<Context> => {
    const accountId = await getAccountId(request);
    return {
      account: database.account({ id: accountId }),
      database,
      request,
    };
  };
}
