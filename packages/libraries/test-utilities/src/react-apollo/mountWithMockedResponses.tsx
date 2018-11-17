import { mount } from "enzyme";
import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";

export default function mountWithMockedResponses (
  element: React.ReactElement<any>,
  responses: MockedResponse[]
) {
  return mount(
    <MockedProvider addTypename={true} mocks={responses}>
      {element}
    </MockedProvider>
  );
}
