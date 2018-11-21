import { MockedResponse } from "react-apollo/test-utils";
import FollowProfile, { FollowProfileVariables } from "./FollowProfile";

const mockFollowProfile = (variables: FollowProfileVariables): MockedResponse => ({
  request: {
    query: FollowProfile,
    variables,
  },
  result: {
    data: {
      followProfile: {
        __typename: "Profile",
        avatar: {
          __typename: "Image",
          id: "avatar_id",
          url: "https://avatar_url.com",
        },
        id: variables.id,
        name: "Profile",
      },
    },
  },
});

export default mockFollowProfile;
