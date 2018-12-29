import { Avatar, Grid, Section } from "design-system";
import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  profile: {
    followers: Array<{
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
      <Section className="ProfileFollowers">
        <h2>Followers</h2>
        <Grid container={true} >
          {profile.followers.map(({ avatar, id, name }) => {
            return (
              <Grid item={true} key={id} sm={4} xs={12}>
                <div className="ProfileFollowers__profile">
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
