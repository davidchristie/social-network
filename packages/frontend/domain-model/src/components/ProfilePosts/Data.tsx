import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { Profile, ProfileVariables} from "../../generated/types";
import PROFILE_QUERY from "../../queries/Profile";
import { Props as ContentProps } from "./Content";

interface Props {
  content: React.ComponentType<ContentProps>;
  profileId: string;
}

const Data: React.StatelessComponent<Props> = ({
  content: Content,
  profileId,
}) => {
  return (
    <Query<Profile, ProfileVariables>
      variables={{
        id: profileId,
      }}
      query={PROFILE_QUERY}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (!data || !data.profile || loading) {
          return <Loading />;
        }
        const { profile } = data;
        return <Content profile={profile} />;
      }}
    </Query>
  );
};

export default Data;
