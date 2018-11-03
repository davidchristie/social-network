import { Test } from "supertest";

export default function expectBodyPropertyToBeAString (
  request: Test,
  property: string
): Promise<void> {
  return new Promise(resolve => {
    request
      .end((error, response) => {
        expect(typeof response.body[property]).toBe("string");
        resolve();
      });
  });
}
