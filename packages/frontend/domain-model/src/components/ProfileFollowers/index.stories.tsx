import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import apolloStorybookDecorator from "apollo-storybook-react";
import { Theme } from "design-system";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ProfileFollowers from ".";
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
        followers: () => ([
          {
            avatar: () => null,
            id: "follower_profile_1",
            name: "Follower Profile 1",
          },
          {
            avatar: () => null,
            id: "follower_profile_2",
            name: "Follower Profile 2",
          },
          {
            avatar: () => null,
            id: "follower_profile_3",
            name: "Follower Profile 3",
          },
        ]),
        following: () => ([]),
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
  "ProfileFollowers",
  () => <ProfileFollowers profileId="profile_id_1" />
);
