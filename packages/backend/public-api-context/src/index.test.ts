import { Request } from "express";
import { ContextParameters } from "graphql-yoga/dist/types";

import { createContext } from ".";

jest.mock("node-fetch", () => () => Promise.resolve({
  json () {
    return Promise.resolve({
      id: null,
    });
  },
}));

const mockRequest = {
  get (header: string) {
    return null;
  },
} as Request;

describe("createContext function", () => {
  it("returns a callback function", () => {
    const contextCallback = createContext();
    expect(typeof contextCallback).toBe("function");
  });

  it("adds the request to context", async () => {
    const contextCallback = createContext();
    const context = await contextCallback({
      request: mockRequest,
    } as ContextParameters);
    expect(context.request).toBe(mockRequest);
  });
});
