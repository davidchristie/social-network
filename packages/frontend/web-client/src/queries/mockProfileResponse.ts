import { MockedResponse } from "react-apollo/test-utils";
import ProfileQuery, { ProfileVariables } from "./Profile";

const mockProfileResponse = (variables: ProfileVariables): MockedResponse => ({
  request: {
    query: ProfileQuery,
    variables,
  },
  result: {
    data: {
      profile: {
        __typename: "Profile",
        avatar: {
          __typename: "Image",
          id: "avatar_id",
          url: "https://avatar_url.com",
        },
        id: variables.id,
        name: "Profile",
        posts: [],
      },
    },
  },
});

export default mockProfileResponse;
