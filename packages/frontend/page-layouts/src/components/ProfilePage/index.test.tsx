import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import { itRendersWithoutCrashing } from "test-utilities/react";
import ProfilePage from ".";

describe("ProfilePage component", () => {
  itRendersWithoutCrashing(
    <MemoryRouter>
      <MockedProvider>
        <ProfilePage />
      </MockedProvider>
    </MemoryRouter>
  );
});
