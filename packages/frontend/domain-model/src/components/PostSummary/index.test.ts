import { describeWithProps } from "test-utilities/react";
import PostSummary from ".";
import { PostSummaryData } from "../../fragments/PostSummary";

const post: PostSummaryData = {
  createdAt: "2018-10-12T07:48:03.948Z",
  createdBy: {
    avatar: {
      __typename: "Image",
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
  describeWithProps("without avatar image", PostSummary, {
    post: {
      ...post,
      createdBy: {
        ...post.createdBy,
        avatar: null,
      },
    },
  });

  describeWithProps("with avatar image", PostSummary, { post });
});
