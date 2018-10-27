import { Prisma } from "data-model";

export default new Prisma({
  debug: true,
  endpoint: process.env.PRISMA_ENDPOINT || "http:localhost:4467",
});
