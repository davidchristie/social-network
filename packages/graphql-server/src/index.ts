import server from "./server";

server.start(({ port }) => {
  console.log(`Server is running on http://localhost:${port}`);
});
