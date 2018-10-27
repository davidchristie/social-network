jest.mock("./server", () => ({
  listen: null,
}));

const listen = jest.fn();

beforeAll(() => {
  require("./server").listen = listen;
  require(".");
});

afterAll(() => {
  jest.resetAllMocks();
});

it("logs a message", () => {
  const log = jest.fn();
  console.log = log;
  const callback = listen.mock.calls[0][1];
  callback();
  expect(log).toHaveBeenCalledTimes(1);
  expect(log).toHaveBeenCalledWith("Running on http://localhost:5000");
});

it("starts the server listening on port 5000", () => {
  expect(listen).toHaveBeenCalledTimes(1);
  expect(listen.mock.calls[0][0]).toBe(5000);
});
