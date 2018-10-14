jest.mock("./server", () => ({
  listen: null,
}));

it("starts the server listening on port 5000", () => {
  const listen = jest.fn();
  require("./server").listen = listen;
  require(".");
  expect(listen).toHaveBeenCalledTimes(1);
  expect(listen.mock.calls[0][0]).toBe(5000);
});
