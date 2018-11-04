import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

import { USER_1_EMAIL, USER_1_PASSWORD } from "../../../constants/login";
import createPublicApiClient from "../createPublicApiClient";
import describeQuery from "../describeQuery";
import getAuthenticationToken from "../getAuthenticationToken";

const withIdField = gql`
  query {
    account {
      id
    }
  }
`;

const withAllAccountFields = gql`
  query {
    account {
      email
      id
      name
      profile {
        id
      }
    }
  }
`;

const withAllProfileFields = gql`
  query {
    account {
      id
      profile {
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
  }
`;

const withAllPostFields = gql`
  query {
    account {
      id
      profile {
        id
        posts {
          createdAt
          createdBy {
            id
          }
          id
          text
        }
      }
    }
  }
`;

describe("account query", () => {
  let client: ApolloClient<{}>;

  describe("without authentication", () => {
    beforeEach(() => {
      client = createPublicApiClient();
    });

    it("returns null account", async () => {
      const { data } = await client.query<any>({
        query: withIdField,
      });
      expect(data!.account).toBeNull();
    });
  });

  describe("with authentication", () => {
    let token: string;

    beforeAll(async () => {
      token = await getAuthenticationToken({
        email: USER_1_EMAIL,
        password: USER_1_PASSWORD,
      });
    });

    beforeEach(() => {
      client = createPublicApiClient({
        token,
      });
    });

    describeQuery("with ID field", withIdField, () => client);

    describeQuery("with all account fields", withAllAccountFields, () => client);

    describeQuery("with all profile fields", withAllProfileFields, () => client);

    describeQuery("with all post fields", withAllPostFields, () => client);
  });
});
