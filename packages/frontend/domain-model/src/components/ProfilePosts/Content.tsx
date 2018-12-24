import React from "react";
import { PostSummary as PostSummaryData } from "../../generated/types";
import PostSummary from "../PostSummary";

export interface Props {
  profile: {
    posts: PostSummaryData[]
  };
}

const Content: React.StatelessComponent<Props> = ({ profile }) => {
  return (
    <div className="ProfilePosts">
      {
        profile.posts
          .map(post => <PostSummary key={post.id} post={post} />)
          .reverse()
      }
    </div>
  );
};

export default Content;
