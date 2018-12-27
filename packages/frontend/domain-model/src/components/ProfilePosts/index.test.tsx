import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import ProfilePosts from ".";

describe("ProfilePosts component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <ProfilePosts profileId="profile_id" />
    </MockedProvider>
  );
});
