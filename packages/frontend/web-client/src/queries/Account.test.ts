import Account from "./Account";

describe("Account mutation", () => {
  it("matches snapshot", () => {
    expect(Account).toMatchSnapshot();
  });
});
