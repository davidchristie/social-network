import { describeWithProps } from "test-utilities/react";
import Content from "./Content";

describe("Content component", () => {
  describe("with own profile", () => {
    describeWithProps("with avatar", Content, {
      account: {
        profile: {
          id: "profile_id",
        },
      },
      profile: {
        avatar: {
          url: "avatar_url",
        },
        id: "profile_id",
        name: "Profile",
      },
    });

    describeWithProps("without avatar", Content, {
      account: {
        profile: {
          id: "profile_id",
        },
      },
      profile: {
        avatar: null,
        id: "profile_id",
        name: "Profile",
      },
    });
  });
});
