import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import { itRendersWithoutCrashing } from "test-utilities/react";
import SignupPage from ".";

describe("SignupPage component", () => {
  itRendersWithoutCrashing(
    <MemoryRouter>
      <MockedProvider>
        <SignupPage />
      </MockedProvider>
    </MemoryRouter>
  );
});
