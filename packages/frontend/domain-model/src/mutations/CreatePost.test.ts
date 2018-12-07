import CreatePost from "./CreatePost";

describe("CreatePost mutation", () => {
  it("matches snapshot", () => {
    expect(CreatePost).toMatchSnapshot();
  });
});
