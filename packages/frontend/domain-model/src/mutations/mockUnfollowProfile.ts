import { MockedResponse } from "react-apollo/test-utils";
import { UnfollowProfileVariables } from "../generated/types";
import UNFOLLOW_PROFILE_MUTATION from "./UnfollowProfile";

const mockUnfollowProfile = (variables: UnfollowProfileVariables): MockedResponse => ({
  request: {
    query: UNFOLLOW_PROFILE_MUTATION,
    variables,
  },
  result: {
    data: {
      unfollowProfile: {
        __typename: "Profile",
        id: variables.id,
      },
    },
  },
});

export default mockUnfollowProfile;
