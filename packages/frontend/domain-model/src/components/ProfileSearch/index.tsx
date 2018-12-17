import { Search } from "design-system";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ProfilesQuery, {
  ProfilesData,
  ProfilesVariables
} from "../../queries/Profiles";

type Props = RouteComponentProps<any>;

const ProfileSearch: React.SFC<Props> = ({ history }) => (
  <Query<ProfilesData, ProfilesVariables> query={ProfilesQuery}>
    {({ refetch }) => {
      return (
        <Search
          fetchSuggestions={async (value: string) => {
            const { data, errors } = await refetch({
              where: {
                name_contains: value,
              },
            });
            if (errors) {
              console.log(errors);
            }
            if (data) {
              return data.profiles;
            }
            return [];
          }}
          onSelect={suggestion => {
            history.push(`/profile/${suggestion.id}`);
          }}
        />
      );
    }}
  </Query>
);

export default withRouter(ProfileSearch);
