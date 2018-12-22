import { describeWithProps } from "test-utilities/react";
import mockProfileResponse from "../../queries/mockProfileResponse";
import Content from "./Content";

const profile = mockProfileResponse({
  id: "profile_id",
}).result!.data!.profile;

describe("Content component", () => {
  describeWithProps("with posts", Content, {
    profile,
  });
});
