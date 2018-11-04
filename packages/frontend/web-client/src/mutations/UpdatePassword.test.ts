import UpdatePassword from "./UpdatePassword";

describe("UpdatePassword mutation", () => {
  it("matches snapshot", () => {
    expect(UpdatePassword).toMatchSnapshot();
  });
});
