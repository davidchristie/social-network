import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/react";
import CreatePostForm from ".";

const profileId = "xxxx-xxxx-xxxx-xxxx";

describe("CreatePostForm component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <CreatePostForm profileId={profileId} />
    </MockedProvider>
  );
});
