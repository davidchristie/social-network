import { Context } from "../../context";

export default (_, args, context: Context) => {
  return context.database.profiles(args);
};
