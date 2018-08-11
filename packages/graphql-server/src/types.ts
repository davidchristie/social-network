import { Request } from "express";

import { Prisma } from "./generated/prisma";

export interface Context {
  database: Prisma;
  request: Request;
}

export interface JWT {
  accountId: string;
}
