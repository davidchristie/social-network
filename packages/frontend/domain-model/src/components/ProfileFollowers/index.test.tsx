import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import ProfileFollowers from ".";

const profileId = "xxxx-xxxx-xxxx-xxxx";

describe("ProfileFollowers component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <ProfileFollowers profileId={profileId} />
    </MockedProvider>
  );
});
