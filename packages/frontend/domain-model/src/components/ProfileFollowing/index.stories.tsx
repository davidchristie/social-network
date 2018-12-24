import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import apolloStorybookDecorator from "apollo-storybook-react";
import { Theme } from "design-system";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ProfileFollowing from ".";
import { ProfileVariables } from "../../generated/types";

const typeDefs = `
  schema {
    query: Query
  }

  type Image {
    id: ID!
    url: String!
  }

  type Post {
    createdAt: String!
    createdBy: Profile!
    id: ID!
    text: String!
  }

  type Profile {
    avatar: Image
    id: ID!
    followers: [Profile!]!
    following: [Profile!]!
    name: String!
    posts: [Post!]!
  }

  type Query {
    profile(id: String!): Profile
  }
`;

const mocks = {
  Query: () => {
    return {
      profile: ({ id }: ProfileVariables) => ({
        avatar: () => null,
        followers: () => ([]),
        following: () => ([
          {
            avatar: () => null,
            id: "followed_profile_1",
            name: "Followed Profile 1",
          },
          {
            avatar: () => null,
            id: "followed_profile_2",
            name: "Followed Profile 2",
          },
          {
            avatar: () => null,
            id: "followed_profile_3",
            name: "Followed Profile 3",
          },
        ]),
        id,
        name: "Profile",
      }),
    };
  },
};

const stories = storiesOf("Domain Model", module);
stories.addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>);
stories.addDecorator(
  apolloStorybookDecorator({
    mocks,
    typeDefs,
  }),
);
stories.addDecorator(getStory => <Theme>{getStory()}</Theme>);
stories.addDecorator(withInfo({
  inline: true,
  propTablesExclude: [
    MemoryRouter,
    function StorybookProvider () { return null; },
    Theme,
  ],
}));
stories.add(
  "ProfileFollowing",
  () => <ProfileFollowing profileId="profile_id_1" />
);
