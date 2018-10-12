import DeletePost from "./DeletePost";

describe("DeletePost mutation", () => {
  it("matches snapshot", () => {
    expect(DeletePost).toMatchSnapshot();
  });
});
