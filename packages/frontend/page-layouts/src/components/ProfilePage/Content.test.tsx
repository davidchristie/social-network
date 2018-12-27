import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { StaticRouter } from "react-router";
import Content from "./Content";

describe("ProfilePage content", () => {
  it("renders without crashing", () => {
    mount(
      <StaticRouter location="/profile/xxxx-xxxx-xxxx-xxxx">
        <MockedProvider>
          <Content />
        </MockedProvider>
      </StaticRouter>
    );
  });
});
