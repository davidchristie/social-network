import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { itRendersWithoutCrashing } from "test-utilities/dist/react";
import AccountMenu from ".";

describe("AccountMenu component", () => {
  itRendersWithoutCrashing(
    <MockedProvider>
      <AccountMenu />
    </MockedProvider>
  );
});
