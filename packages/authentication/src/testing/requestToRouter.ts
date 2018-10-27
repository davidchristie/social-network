import bodyParser from "body-parser";
import express, { Router } from "express";
import request from "supertest";

export default function requestToRouter (router: Router) {
  const server = express();
  server.use(bodyParser.json());
  server.use(router);
  return request(server);
}
