import { ApolloClient } from "apollo-boost";

export default function describeQuery (
  name: string,
  query: any,
  getClient: () => ApolloClient<any>
) {
  describe(name, () => {
    it("doesn't return errors", async () => {
      const client = getClient();
      const { errors } = await client.query({
        query,
      });
      expect(errors).toBeUndefined();
    });
  });
}
