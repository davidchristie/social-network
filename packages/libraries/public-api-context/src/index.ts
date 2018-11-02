import { Account, Prisma } from "data-model";
import { Request } from "express";
import { ContextCallback } from "graphql-yoga/dist/types";

import account from "./account";
import database from "./database";

export interface Context {
  account: Account;
  database: Prisma;
  request: Request;
}

export function createContext (): ContextCallback {
  return async ({ request }): Promise<Context> => {
    return {
      account: await account(request),
      database,
      request,
    };
  };
}

