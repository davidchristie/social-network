import { mount, ReactWrapper } from "enzyme";
import React from "react";

import Search from ".";

describe("Search component", () => {
  let wrapper: ReactWrapper;
  let fetchSuggestions: (value: string) => Promise<any[]>;
  let onSelect: () => void;

  beforeEach(() => {
    fetchSuggestions = jest.fn(() => Promise.resolve([]));
    onSelect = jest.fn();
    const props = {
      fetchSuggestions,
      onSelect,
    };
    wrapper = mount(<Search {...props} />);
  });

  describe("when value is entered", () => {
    const NEW_VALUE = "new_value";

    beforeEach(() => {
      wrapper.find("input").first().simulate("change", {
        target: {
          value: NEW_VALUE,
        },
      });
    });

    it("fetches suggestions for that value", () => {
      expect(fetchSuggestions).toBeCalledWith(NEW_VALUE);
    });
  });
});
