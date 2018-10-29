import { Router } from "express";

import requestToRouter from "./requestToRouter";

interface Expect {
  body?: any;
  status: number;
  text?: string;
}

interface Options {
  data: any;
  expect: Expect;
  router: Router;
}

export default function postToRouter ({
  data,
  expect: {
    body,
    status,
    text,
  },
  router,
}: Options) {
  return new Promise(resolve => {
    return requestToRouter(router)
      .post("/")
      .send(data)
      .expect(status)
      .end((error, response) => {
        if (error) {
          throw error;
        }
        if (body !== undefined) {
          expect(response.body).toEqual(body);
        }
        if (text !== undefined) {
          expect(response.text).toEqual(text);
        }
        resolve();
      });
  });
}
