import { describeWithProps } from "test-utilities/react";
import Content from "./Content";

describe("Content component", () => {
  describeWithProps(
    "renders following profiles",
    Content,
    {
      profile: {
        following: [
          {
            avatar: null,
            id: "following_profile_id_1",
            name: "Following Profile 1",
          },
          {
            avatar: null,
            id: "following_profile_id_2",
            name: "Following Profile 2",
          },
          {
            avatar: null,
            id: "following_profile_id_3",
            name: "Following Profile 3",
          },
        ],
      },
    },
  );
});
