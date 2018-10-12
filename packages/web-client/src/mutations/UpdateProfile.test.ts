import UpdateProfile from "./UpdateProfile";

describe("UpdateProfile mutation", () => {
  it("matches snapshot", () => {
    expect(UpdateProfile).toMatchSnapshot();
  });
});
