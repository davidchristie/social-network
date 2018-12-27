import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import FollowProfileButton from ".";

describe("FollowProfileButton component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <FollowProfileButton profileId="profile_id" />
    </MockedProvider>
  );
});
