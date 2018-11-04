import prisma from "../services/prisma";

export default function getAccountByEmail (email: string) {
  return prisma.account({ email });
}
