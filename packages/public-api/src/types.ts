import { Prisma } from "data-model";
import { Request } from "express";

export interface Context {
  database: Prisma;
  request: Request;
}

export interface JWT {
  accountId: string;
}
