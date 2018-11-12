import { Prisma } from "data-model";
import { Request } from "express";
import { services } from "./services";

export interface Context {
  accountId: string | null;
  database: Prisma;
  request: Request;
  services: typeof services;
}
