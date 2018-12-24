import { describeWithProps } from "test-utilities/react";
import Content from "./Content";

describe("Content component", () => {
  describeWithProps(
    "renders followed profiles",
    Content,
    {
      profile: {
        following: [
          {
            avatar: null,
            id: "followed_profile_id_1",
            name: "Followed Profile 1",
          },
          {
            avatar: null,
            id: "followed_profile_id_2",
            name: "Followed Profile 2",
          },
          {
            avatar: null,
            id: "followed_profile_id_3",
            name: "Followed Profile 3",
          },
        ],
      },
    },
  );
});
