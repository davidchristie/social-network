import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import ProfileFollowing from ".";

const profileId = "xxxx-xxxx-xxxx-xxxx";

describe("ProfileFollowing component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <ProfileFollowing profileId={profileId} />
    </MockedProvider>
  );
});
