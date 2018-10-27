import { Router } from "express";

import postToRouter from "./postToRouter";

export default function itReturnsStatusCode (
  router: Router,
  status: number,
  data: any = {},
) {
  it(`returns status code ${status}`, () => postToRouter({
    data,
    expect: {
      status,
    },
    router,
  }));
}
