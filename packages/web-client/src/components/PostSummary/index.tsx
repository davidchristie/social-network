import React from "react";

import { PostSummaryData } from "../../fragments/PostSummary";
import DeletePostButton from "../DeletePostButton";
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
        <div>
          <strong>{post.createdBy.name}</strong>
        </div>
        <div>
          <RelativeDate value={post.createdAt} />
        </div>
        <hr />
        {post.text}
        <hr />
        <DeletePostButton postId={post.id} />
      </div>
    );
  }
}
