import { shallow } from "enzyme";
import React from "react";

import { PostSummaryData } from "../../fragments/PostSummary";
import PostSummary from "./index";

const post: PostSummaryData = {
  createdAt: "2018-10-12T07:48:03.948Z",
  createdBy: {
    avatar: {
      __typename: "ImageData",
      id: "cjn5pxfvg001h0a42hqjvgo11",
      url: "https:cdn.social-network.com/images/default-avatar.png",
    },
    id: "cjn5pm4wm000r0a4239rvnn8i",
    name: "User 1",
  },
  id: "cjn5pmj1b000y0a42mds0fa37",
  text: "Post 1",
};

describe("PostSummary component", () => {
  describe("without avatar image", () => {
    it("matches snapshot", () => {
      const postWithoutAvatar: PostSummaryData = {
        ...post,
        createdBy: {
          ...post.createdBy,
          avatar: null,
        },
      };
      const wrapper = shallow(<PostSummary post={postWithoutAvatar} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("with avatar image", () => {
    it("matches snapshot", () => {
      const wrapper = shallow(<PostSummary post={post} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
