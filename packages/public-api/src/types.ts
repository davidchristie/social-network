import { Account, Prisma } from "data-model";
import { Request } from "express";

export interface JWT {
  accountId: string;
}
