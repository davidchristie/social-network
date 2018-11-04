import { Context } from "public-api-context";

export default {
  createdBy ({ id }, { }, context: Context) {
    return context.database.post({ id }).createdBy();
  },
};
