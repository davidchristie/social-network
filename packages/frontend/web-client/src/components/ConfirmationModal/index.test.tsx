import { Button } from "design-system";
import { shallow } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/react";

import ConfirmationModal from ".";

describe("ConfirmationModal component", () => {
  describeWithProps("when open", ConfirmationModal, {
    onClose: () => { return; },
    onConfirm: () => { return; },
    open: false,
  });

  describeWithProps("when closed", ConfirmationModal, {
    onClose: () => { return; },
    onConfirm: () => { return; },
    open: false,
  });

  it(`closes modal when "Confirm" button is clicked`, () => {
    const onClose = jest.fn();
    const props = {
      onClose,
      onConfirm: () => { return; },
      open: true,
    };
    const wrapper = shallow(<ConfirmationModal {...props} />);
    const confirmButton = wrapper.find(Button).first();
    confirmButton.simulate("click");
    expect(onClose).toBeCalledTimes(1);
  });
});
