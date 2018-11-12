import "../../../generated/graphqlgen";
import server from "./server";

server.start(({ port }) => {
  console.log(`Running on http://localhost:${port}`);
});
