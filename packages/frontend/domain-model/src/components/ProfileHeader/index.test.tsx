import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import ProfileHeader from ".";

describe("ProfileHeader component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <ProfileHeader profileId="xxxx-xxxx-xxxx-xxxx" />
    </MockedProvider>
  );
});
