import prisma from "../services/prisma";

export default function getAccountById (id: string) {
  return prisma.account({ id });
}
