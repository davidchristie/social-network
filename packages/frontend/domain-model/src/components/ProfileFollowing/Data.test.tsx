import { Loading } from "design-system";
import { ReactWrapper } from "enzyme";
import React from "react";
import { MockedResponse } from "react-apollo/test-utils";
import { beforeEachWaitForUpdate, itContainsComponent } from "test-utilities/enzyme";
import { mountWithMockedResponses } from "test-utilities/react-apollo";
import mockProfileResponse from "../../queries/mockProfileResponse";
import Data from "./Data";

const profileId = "profile_id_1";
const Content: React.ComponentType<any> = () => null;
const responses: MockedResponse[] = [
  mockProfileResponse({ id: profileId }),
];

describe("Data component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountWithMockedResponses(
      <Data content={Content} profileId={profileId} />,
      responses
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
