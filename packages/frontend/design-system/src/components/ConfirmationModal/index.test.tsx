import { Button } from "design-system";
import { shallow } from "enzyme";
import React from "react";
import { describeWithProps } from "test-utilities/react";

import ConfirmationModal from ".";

describe("ConfirmationModal component", () => {
  describeWithProps("when open", ConfirmationModal, {
    onCancel: () => { return; },
    onConfirm: () => { return; },
    open: false,
  });

  describeWithProps("when closed", ConfirmationModal, {
    onCancel: () => { return; },
    onConfirm: () => { return; },
    open: false,
  });

  it(`calls onConfirm when "Confirm" button is clicked`, () => {
    const onConfirm = jest.fn();
    const props = {
      onCancel: () => { return; },
      onConfirm,
      open: true,
    };
    const wrapper = shallow(<ConfirmationModal {...props} />);
    const confirmButton = wrapper.find(Button).first();
    confirmButton.simulate("click");
    expect(onConfirm).toBeCalledTimes(1);
  });
});
