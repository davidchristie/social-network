import { ProfileVariables } from "../../../generated/types";

export default {
  Query: () => {
    return {
      account: () => ({
        email: "account@email.com",
        id: "account_id",
        name: "Account",
        profile: () => ({
          avatar: () => null,
          followers: () => ([]),
          following: () => ([]),
          id: "profile_id",
          name: "Profile",
        }),
      }),
      profile: ({ id }: ProfileVariables) => ({
        avatar: () => null,
        followers: () => ([
          {
            avatar: () => null,
            id: "follower_profile_1",
            name: "Follower Profile 1",
          },
          {
            avatar: () => null,
            id: "follower_profile_2",
            name: "Follower Profile 2",
          },
          {
            avatar: () => null,
            id: "follower_profile_3",
            name: "Follower Profile 3",
          },
        ]),
        following: () => ([
          {
            avatar: () => null,
            id: "following_profile_1",
            name: "Following Profile 1",
          },
          {
            avatar: () => null,
            id: "following_profile_2",
            name: "Following Profile 2",
          },
          {
            avatar: () => null,
            id: "following_profile_3",
            name: "Following Profile 3",
          },
        ]),
        id,
        name: "Profile",
      }),
    };
  },
};
