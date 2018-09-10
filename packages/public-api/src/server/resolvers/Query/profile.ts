import { Context } from "../../../types";

interface Arguments {
  id: string;
}

export default async function account (
  { },
  { id }: Arguments,
  context: Context,
  info
) {
  return context.database.query.profile(
    {
      where: {
        id,
      },
    },
    info,
  );
}
