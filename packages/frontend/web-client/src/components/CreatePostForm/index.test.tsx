import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import CreatePostForm from ".";

describe("CreatePostForm component", () => {
  it("renders without crashing", () => {
    mount(
      <MockedProvider>
        <CreatePostForm />
      </MockedProvider>
    );
  });
});
