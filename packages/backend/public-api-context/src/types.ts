import { Prisma } from "data-model";
import { Request } from "express";

export interface Context {
  accountId: string | null;
  database: Prisma;
  request: Request;
}
