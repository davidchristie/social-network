import { Alert, Loading } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import ProfileQuery, {
  ProfileData,
  ProfileVariables
} from "../../queries/Profile";
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
    <Query<ProfileData, ProfileVariables>
      variables={{
        id: profileId,
      }}
      query={ProfileQuery}
    >
      {({ data, error, loading }) => {
        if (error) {
          return <Alert>{error.message}</Alert>;
        }
        if (!data || loading) {
          return <Loading />;
        }
        const { profile } = data;
        return <Content profile={profile} />;
      }}
    </Query>
  );
};

export default Data;
