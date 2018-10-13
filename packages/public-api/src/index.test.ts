jest.mock("./server", () => ({
  start: null,
}));

it("starts the server", () => {
  const start = jest.fn();
  require("./server").start = start;
  require(".");
  expect(start).toHaveBeenCalledTimes(1);
});
