import { describeWithProps } from "test-utilities/react";
import Content from "./Content";

describe("Content component", () => {
  describeWithProps(
    "renders follower profiles",
    Content,
    {
      profile: {
        followers: [
          {
            avatar: null,
            id: "follower_profile_id_1",
            name: "Follower Profile 1",
          },
          {
            avatar: null,
            id: "follower_profile_id_2",
            name: "Follower Profile 2",
          },
          {
            avatar: null,
            id: "follower_profile_id_3",
            name: "Follower Profile 3",
          },
        ],
      },
    },
  );
});
