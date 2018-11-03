import { Context } from "public-api-context";

export default {
  profile ({ id }, { }, context: Context) {
    return context.database
      .account({
        id,
      })
      .profile();
  },
};
