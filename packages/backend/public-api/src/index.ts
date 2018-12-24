import costAnalysis from "graphql-cost-analysis";
import { Options } from "graphql-yoga";
import server from "./server";

const options: Options = {
  validationRules: request => [
    costAnalysis({
      defaultCost: 1,
      maximumCost: 50,
      onComplete: cost => {
        console.log(`Cost analysis score: ${cost}`);
      },
      variables: request.query.variables,
    }),
  ],
};

server.start(options, ({ port }) => {
  console.log(`Running on http://localhost:${port}`);
});
