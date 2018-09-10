import React from "react";

import { PostSummaryData } from "../../fragments/PostSummary";
import PostMenu from "../PostMenu";
import RelativeDate from "../RelativeDate";
import "./index.css";

interface Props {
  post: PostSummaryData;
}

export default class PostSummary extends React.Component<Props> {
  public render () {
    const { post } = this.props;
    return (
      <div className="Post">
        <div className="header">
          <div>
            <div>
              <strong>{post.createdBy.name}</strong>
            </div>
            <div>
              <RelativeDate value={post.createdAt} />
            </div>
          </div>
          <PostMenu postId={post.id} />
        </div>
        <hr />
        {post.text}
      </div>
    );
  }
}
