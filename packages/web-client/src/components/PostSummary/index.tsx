import React from "react";
import { Link } from "react-router-dom";

import { PostSummaryData } from "../../fragments/PostSummary";
import Avatar from "../Avatar";
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
          <div className="profile">
            <Link to={`/profile/${post.createdBy.id}`} style={{ height: 0 }}>
              <Avatar
                image={post.createdBy.avatar ? post.createdBy.avatar.url : undefined}
                size="small"
              />
            </Link>
            <div>
              <div>
                <Link to={`/profile/${post.createdBy.id}`}>
                  <strong>{post.createdBy.name}</strong>
                </Link>
              </div>
              <div>
                <small><RelativeDate value={post.createdAt} /></small>
              </div>
            </div>
          </div>
          <div>
            <PostMenu postId={post.id} />
          </div>
        </div>
        <hr />
        {post.text}
      </div>
    );
  }
}

