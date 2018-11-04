import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Overlay from "../Overlay";
import Dropdown from "./index";

describe("Dropdown component", () => {
  let wrapper: ShallowWrapper;

  describe("when closed", () => {
    beforeEach(() => {
      wrapper = shallow(<Dropdown open={false} />);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when open", () => {
    const onClose = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<Dropdown onClose={onClose} open={true} />);
    });

    it("renders overlay", () => {
      expect(wrapper.find(Overlay).exists()).toBe(true);
    });

    it("is closed by clicking overlay", () => {
      wrapper.find(Overlay).simulate("click");
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("matches snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
