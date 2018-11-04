import { ApolloClient } from "apollo-boost";
import gql from "graphql-tag";

import { PUBLIC_API_HOST } from "../../../constants/hosts";
import { USER_1_EMAIL, USER_1_PASSWORD } from "../../../constants/login";
import createPublicApiClient from "../createPublicApiClient";
import getAuthenticationToken from "../getAuthenticationToken";

const withIdField = gql`
  query {
    account {
      id
    }
  }
`;

const withAllFields = gql`
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

const withProfilePosts = gql`
  query {
    account {
      id
      profile {
        id
        posts {
          id
        }
      }
    }
  }
`;

describe(PUBLIC_API_HOST, () => {
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

      describe("with ID field", () => {
        it("matches snapshot", async () => {
          const { data } = await client.query({
            query: withIdField,
          });
          expect(data).toMatchSnapshot();
        });
      });

      describe("with all fields", () => {
        it("matches snapshot", async () => {
          const { data } = await client.query({
            query: withAllFields,
          });
          expect(data).toMatchSnapshot();
        });
      });

      describe("with profile posts", () => {
        it("matches snapshot", async () => {
          const { data } = await client.query({
            query: withProfilePosts,
          });
          expect(data).toMatchSnapshot();
        });
      });
    });
  });
});
