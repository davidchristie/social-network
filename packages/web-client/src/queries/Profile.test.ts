import Profile from "./Profile";

describe("Profile mutation", () => {
  it("matches snapshot", () => {
    expect(Profile).toMatchSnapshot();
  });
});
