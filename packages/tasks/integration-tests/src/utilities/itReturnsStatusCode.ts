import { Test } from "supertest";

export default function itReturnsStatusCode (
  getRequest: () => Test,
  status: number
) {
  it("returns status code 200", done => {
    getRequest()
      .expect(status)
      .end(done);
  });
}
