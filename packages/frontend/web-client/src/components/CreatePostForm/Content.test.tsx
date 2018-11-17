import { TextArea } from "design-system";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { itMatchesSnapshot } from "test-utilities/react";
import Content, { Props, State } from "./Content";

describe("Content component", () => {
  itMatchesSnapshot(<Content createPost={jest.fn()} />);

  describe("when text changes", () => {
    const createPost = jest.fn();
    const newText = "new_text";
    let wrapper: ShallowWrapper<Props, State>;

    beforeEach(() => {
      wrapper = shallow(<Content createPost={createPost} />);
      wrapper.find(TextArea).first().props().onChange({
        target: {
          value: newText,
        },
      });
    });

    it("updates state", () => {
      expect(wrapper.state().text).toEqual(newText);
    });

    describe("when form is submitted", () => {
      const preventDefault = jest.fn();

      beforeEach(() => {
        wrapper.find("form").first().simulate("submit", {
          preventDefault,
        });
      });

      it("prevents default action", () => {
        expect(preventDefault).toBeCalled();
      });

      it("creates a post", () => {
        expect(createPost).toBeCalledWith({
          variables: {
            text: newText,
          },
        });
      });

      it("clears the text", () => {
        expect(wrapper.state().text).toEqual("");
      });
    });
  });
});
