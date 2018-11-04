import { Context } from "public-api-context";

interface Arguments {
  id: string;
}

export default function profile ({ }, { id }: Arguments, context: Context) {
  return context.database.profile({ id });
}
