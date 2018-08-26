import server from "./server";

const port = 5000;

server.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
