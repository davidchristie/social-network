import { Context } from "public-api-context";

export default {
  posts ({ id }, { }, context: Context) {
    return context.database
      .profile({
        id,
      })
      .posts();
  },
};
