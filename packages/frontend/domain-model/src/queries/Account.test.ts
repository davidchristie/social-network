import Account from "./Account";

describe("Account query", () => {
  it("matches snapshot", () => {
    expect(Account).toMatchSnapshot();
  });
});
