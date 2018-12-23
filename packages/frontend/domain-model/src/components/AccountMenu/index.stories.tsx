import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import apolloStorybookDecorator from "apollo-storybook-react";
import { Theme } from "design-system";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccountMenu from ".";

const typeDefs = `
  schema {
    query: Query
  }

  type Account {
    email: String!
    id: ID!
    name: String!
    profile: Profile!
  }

  type Image {
    id: ID!
    url: String!
  }

  type Profile {
    avatar: Image
    id: ID!
    followers: [Profile!]!
    following: [Profile!]!
    name: String!
  }

  type Query {
    account: Account
  }
`;

const mocks = {
  Query: () => {
    return {
      account: () => ({
        email: "account@email.com",
        id: "account_id",
        name: "Account",
        profile: () => ({
          avatar: () => null,
          followers: () => ([]),
          following: () => ([]),
          id: "profile_id",
          name: "Profile",
        }),
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
  "AccountMenu",
  () => <AccountMenu />
);
