import { Router } from "express"

import requestToRouter from "./requestToRouter"

export default function postToRouter(router: Router, data: any) {
  return requestToRouter(router)
    .post('/')
    .send(data)
}
