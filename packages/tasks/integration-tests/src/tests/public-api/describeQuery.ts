import { ApolloClient } from "apollo-boost";

export default function describeQuery (
  name: string,
  query: any,
  getClient: () => ApolloClient<any>
) {
  describe(name, () => {
    it("matches snapshot", async () => {
      const client = getClient();
      const { data } = await client.query({
        query,
      });
      expect(data).toMatchSnapshot();
    });
  });
}
