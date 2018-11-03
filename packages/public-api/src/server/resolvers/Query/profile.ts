import { Context } from "public-api-context";

interface Arguments {
  id: string;
}

export default async function profile (
  { },
  { id }: Arguments,
  context: Context,
  info
) {
  return context.database.profile({ id });
}
