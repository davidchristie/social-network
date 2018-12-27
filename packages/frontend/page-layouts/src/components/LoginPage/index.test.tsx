import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import { itRendersWithoutCrashing } from "test-utilities/react";
import LoginPage from ".";

describe("LoginPage component", () => {
  itRendersWithoutCrashing(
    <MemoryRouter>
      <MockedProvider>
        <LoginPage />
      </MockedProvider>
    </MemoryRouter>
  );
});
