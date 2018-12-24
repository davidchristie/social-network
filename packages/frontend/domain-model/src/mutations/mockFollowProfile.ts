import { MockedResponse } from "react-apollo/test-utils";
import { FollowProfileVariables } from "../generated/types";
import FOLLOW_PROFILE_MUTATION from "./FollowProfile";

const mockFollowProfile = (variables: FollowProfileVariables): MockedResponse => ({
  request: {
    query: FOLLOW_PROFILE_MUTATION,
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
