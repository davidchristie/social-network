import { Prisma } from "data-model";
import { Request } from "express";

interface Account {
  id: string | null;
}

export interface Context {
  account: Account;
  database: Prisma;
  request: Request;
}
