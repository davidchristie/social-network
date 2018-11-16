import { Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import mockAccountResponse from "../../queries/mockAccountResponse";
import mockProfileResponse from "../../queries/mockProfileResponse";
import Data from "./Data";

const Content: React.ComponentType<any> = () => null;
const mocks: MockedResponse[] = [
  mockAccountResponse(),
  mockProfileResponse({ id: "profile_id" }),
];

describe("Data component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider addTypename={true} mocks={mocks}>
        <Data content={Content} />;
      </MockedProvider>
    );
  });

  describe("loading state", () => {
    itContainsComponent("renders loading component", () => wrapper, Loading);
  });

  describe("loaded content", () => {
    beforeEachWaitForUpdate(() => wrapper);

    itContainsComponent("renders content component", () => wrapper, Content);
  });
});
