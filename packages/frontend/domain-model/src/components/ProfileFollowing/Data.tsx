import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { Profile, ProfileVariables } from "../../generated/types";
import PROFILE_QUERY from "../../queries/Profile";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
  profileId: string;
}

const Data: React.ComponentType<Props> = ({ content, profileId }) => {
  const Content = content;
  return (
    <Query<Profile, ProfileVariables>
      query={PROFILE_QUERY}
      variables={{
        id: profileId,
      }}
    >
      {({ error, loading, data }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (loading || !data || !data.profile) {
          return <Loading />;
        }
        return <Content profile={data.profile} />;
      }}
    </Query>
  );
};

export default Data;
