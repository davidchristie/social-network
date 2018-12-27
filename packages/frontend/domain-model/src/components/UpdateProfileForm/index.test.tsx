import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/react";
import UpdateProfileForm from ".";

describe("UpdateProfileForm component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <UpdateProfileForm />
    </MockedProvider>
  );
});
