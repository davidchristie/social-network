import Login from "./Login";

describe("Login mutation", () => {
  it("matches snapshot", () => {
    expect(Login).toMatchSnapshot();
  });
});
