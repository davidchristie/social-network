import { MockedResponse } from "react-apollo/test-utils";
import ProfileQuery, { ProfileVariables } from "./Profile";

const mockProfileResponse = (variables: ProfileVariables): MockedResponse => {
  const avatar = {
    __typename: "Image",
    id: "avatar_id",
    url: "https://avatar_url.com",
  };
  const profile = {
    __typename: "Profile",
    avatar,
    id: variables.id,
    name: "Profile",
  };
  return {
    request: {
      query: ProfileQuery,
      variables,
    },
    result: {
      data: {
        profile: {
          ...profile,
          posts: Array(3).fill(null).map((_, index) => ({
            __typename: "Post",
            createdAt: "2018-10-22T01:15:47.347Z",
            createdBy: {
              ...profile,
            },
            id: `post_id_${index}`,
            text: `Post ${index}`,
          })),
        },
      },
    },
  };
};

export default mockProfileResponse;
