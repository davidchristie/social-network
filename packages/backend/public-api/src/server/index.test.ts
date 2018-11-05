import { GraphQLServer } from "graphql-yoga";
import request from "supertest";

import server from ".";

const PORT = 8080;

it("exports a GraphQL server", () => {
  expect(server).toBeInstanceOf(GraphQLServer);
});

describe("GraphQL server", () => {
  let stopServer: () => Promise<void>;
  let uri: string;

  beforeAll(async () => {
    const instance = await server.start({ port: PORT }, ({ port }) => {
      uri = `http://localhost:${port}`;
    });
    stopServer = () => new Promise(resolve => {
      instance.close(resolve);
    });
  });

  afterAll(() => {
    return stopServer();
  });

  it("redirects HTTP to HTTPS", done => {
    request(uri)
      .get("/")
      .set("X-Forwarded-Proto", "http")
      .expect(301)
      .end((error, response) => {
        expect(response.header.location.startsWith("https://"));
        done();
      });
  });

  describe("GET /", () => {
    it("returns status 200", done => {
      request(uri)
        .get("/")
        .set("X-Forwarded-Proto", "https")
        .expect(200)
        .end(done);
    });
  });
});
