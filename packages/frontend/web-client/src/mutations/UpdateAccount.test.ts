import UpdateAccount from "./UpdateAccount";

describe("UpdateAccount mutation", () => {
  it("matches snapshot", () => {
    expect(UpdateAccount).toMatchSnapshot();
  });
});
