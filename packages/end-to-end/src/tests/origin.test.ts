import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";
import waitForLoading from "../utilities/waitForLoading";

describe("origin", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(ORIGIN);
    await waitForLoading(page);
  });

  it(`redirects to "/login"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}/login`);
  });

  it("renders LoginPage component", async () => {
    expect(await page.$(".LoginPage")).not.toBeNull();
  });
});
