import Profiles from "./Profiles";

describe("Profiles query", () => {
  it("matches snapshot", () => {
    expect(Profiles).toMatchSnapshot();
  });
});
