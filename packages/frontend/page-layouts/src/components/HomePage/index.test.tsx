import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import { itRendersWithoutCrashing } from "test-utilities/react";
import HomePage from ".";

describe("HomePage component", () => {
  itRendersWithoutCrashing(
    <MemoryRouter>
      <MockedProvider>
        <HomePage />
      </MockedProvider>
    </MemoryRouter>
  );
});
