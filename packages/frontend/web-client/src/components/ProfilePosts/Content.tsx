import React from "react";
import { PostSummaryData } from "../../fragments/PostSummary";
import PostSummary from "../PostSummary";

interface Props {
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
