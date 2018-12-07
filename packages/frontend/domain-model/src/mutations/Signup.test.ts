import Signup from "./Signup";

describe("Signup mutation", () => {
  it("matches snapshot", () => {
    expect(Signup).toMatchSnapshot();
  });
});
