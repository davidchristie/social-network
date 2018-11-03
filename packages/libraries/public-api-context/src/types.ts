import { Account, Prisma } from "data-model";
import { Request } from "express";

export interface Context {
  account: Account;
  database: Prisma;
  request: Request;
}
