import PostSummary from "./PostSummary";

describe("PostSummary fragment", () => {
  it("matches snapshot", () => {
    expect(PostSummary).toMatchSnapshot();
  });
});
