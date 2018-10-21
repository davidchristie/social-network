import { Router } from "express";

import requestToRouter from "./requestToRouter";

export default function itReturnsNullAccountId(router: Router, token?: string) {
  it("returns null account ID", done => {
    const headers: any = {}
    if (token !== undefined) {
      headers.Authorization = `Bearer ${token}`
    }
    requestToRouter(router)
      .get("/")
      .expect("Content-Type", /json/)
      .set(headers)
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw error
        }
        expect(response.body).toEqual({
          id: null
        })
        done()
      })
  })
}
