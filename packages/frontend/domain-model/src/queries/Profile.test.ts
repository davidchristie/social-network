import Profile from "./Profile";

describe("Profile query", () => {
  it("matches snapshot", () => {
    expect(Profile).toMatchSnapshot();
  });
});
