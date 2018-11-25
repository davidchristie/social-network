import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

import createPublicApiClient from "../createPublicApiClient";
import describeQuery from "../describeQuery";

const withIdField = gql`
  query {
    profiles {
      id
    }
  }
`;

const withAllProfileFields = gql`
  query {
    profiles {
      avatar {
        id
      }
      id
      name
      posts {
        id
      }
    }
  }
`;

describe("profiles query", () => {
  let client: ApolloClient<{}>;

  beforeEach(() => {
    client = createPublicApiClient();
  });

  describeQuery("with ID field", withIdField, () => client);

  describeQuery("with all profile fields", withAllProfileFields, () => client);
});
