import { ReactWrapper } from "enzyme";
import React from "react";
import { MockedResponse } from "react-apollo/test-utils";
import { itContainsComponent } from "test-utilities/enzyme";
import { mountWithMockedResponses } from "test-utilities/react-apollo";
import mockAccountResponse from "../../queries/mockAccountResponse";
import Data from "./Data";

const Content: React.ComponentType<any> = () => null;
const responses: MockedResponse[] = [
  mockAccountResponse(),
];

describe("Data component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountWithMockedResponses(<Data content={Content} />, responses);
  });

  itContainsComponent("renders content component", () => wrapper, Content);
});
