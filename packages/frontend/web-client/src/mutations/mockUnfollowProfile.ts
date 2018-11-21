import { MockedResponse } from "react-apollo/test-utils";
import UnfollowProfile, { UnfollowProfileVariables } from "./UnfollowProfile";

const mockUnfollowProfile = (variables: UnfollowProfileVariables): MockedResponse => ({
  request: {
    query: UnfollowProfile,
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
