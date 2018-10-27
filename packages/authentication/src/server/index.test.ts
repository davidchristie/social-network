import server from ".";

it("has listen method", () => {
  expect(typeof server.listen).toBe("function");
});
