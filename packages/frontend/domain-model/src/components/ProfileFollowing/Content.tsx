import { Avatar, Grid, Section } from "design-system";
import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  profile: {
    following: Array<{
      avatar: {
        url: string;
      } | null;
      id: string;
      name: string;
    }>;
  };
}

export interface State {
  anchorElement: HTMLElement | null;
}

export default class Content extends React.Component<Props, State> {
  public render () {
    const { profile } = this.props;
    return (
      <Section className="ProfileFollowing">
        <h2>Following</h2>
        <Grid container={true}>
          {profile.following.map(({ avatar, id, name }) => {
            return (
              <Grid item={true} key={id} sm={4} xs={12}>
                <div className="ProfileFollowing__profile">
                  <Avatar
                    image={avatar ? avatar.url : undefined}
                    size="small"
                  />
                  <Link to={`/profile/${id}`}>
                    {name}
                  </Link>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Section>
    );
  }
}
