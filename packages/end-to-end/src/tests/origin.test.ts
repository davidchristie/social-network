import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";

describe("origin", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(ORIGIN);
    await page.waitFor(() => {
      return !document.body.textContent.includes("Loading");
    });
  });

  it(`redirects to "/login"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}/login`);
  });

  it("renders LoginPage component", async () => {
    expect(await page.$(".LoginPage")).not.toBeNull();
  });
});
