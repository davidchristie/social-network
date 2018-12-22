import { PostSummary } from "domain-model";
import React from "react";
import { PostSummaryData } from "../../fragments/PostSummary";

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
