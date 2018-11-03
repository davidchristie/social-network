import { Context } from "public-api-context";

interface Arguments {
  id: string;
}

export default function profile (
  { },
  { id }: Arguments,
  context: Context,
  info
) {
  console.log("profile resolver, ID: ", id);
  return context.database.profile({ id });
}
