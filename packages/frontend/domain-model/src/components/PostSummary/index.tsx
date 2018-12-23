import { Avatar, RelativeDate } from "design-system";
import React from "react";
import { Link } from "react-router-dom";
import { PostSummaryData } from "../../fragments/PostSummary";
import PostMenu from "../PostMenu";
import "./index.css";

interface Props {
  post: PostSummaryData;
}

export default class PostSummary extends React.Component<Props> {
  public render () {
    const { post } = this.props;
    return (
      <div className="PostSummary">
        <div className="header">
          {this.renderProfile()}
          <div>
            <PostMenu postId={post.id} />
          </div>
        </div>
        <hr />
        {post.text}
      </div>
    );
  }

  private renderProfile = () => {
    const { post } = this.props;
    return (
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
    );
  }
}
