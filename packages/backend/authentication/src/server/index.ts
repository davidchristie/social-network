import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import routes from "./routes";

const server = express();
server.use(morgan("tiny"));
server.use(bodyParser.json());
server.use(routes);

export default server;
