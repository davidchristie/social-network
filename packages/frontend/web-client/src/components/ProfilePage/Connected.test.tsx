import { Loading } from "design-system";
import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";
import Connected from "./Connected";

const TestContent: React.ComponentType<any> = () => null;

describe("Connected component", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <MockedProvider>
          <Connected content={TestContent} />
        </MockedProvider>
      </MemoryRouter>
    );
  });

  describe("loading state", () => {
    it("renders loading component", () => {
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  });
});
