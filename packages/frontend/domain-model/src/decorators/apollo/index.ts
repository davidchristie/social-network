import apolloStorybookDecorator from "apollo-storybook-react";
import mocks from "./mocks";
import typeDefs from "./typeDefs";

export default apolloStorybookDecorator({
  mocks,
  typeDefs,
});
