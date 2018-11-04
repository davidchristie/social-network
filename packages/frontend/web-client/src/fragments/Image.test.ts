import Image from "./Image";

describe("Image fragment", () => {
  it("matches snapshot", () => {
    expect(Image).toMatchSnapshot();
  });
});
