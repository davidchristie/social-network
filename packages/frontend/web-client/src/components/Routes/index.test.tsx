import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Route } from "react-router-dom";
import Routes from ".";

describe("Routes component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("each route", () => {
    it("renders without crashing", () => {
      wrapper.find(Route).forEach(route => {
        route.props().render();
      });
    });
  });
});
