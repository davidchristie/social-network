import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import { itRendersWithoutCrashing } from "test-utilities/react";
import AccountPage from ".";

describe("AccountPage component", () => {
  itRendersWithoutCrashing(
    <MemoryRouter>
      <MockedProvider>
        <AccountPage />
      </MockedProvider>
    </MemoryRouter>
  );
});
