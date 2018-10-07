import puppeteer, { Browser, Page } from "puppeteer";

import { ORIGIN } from "../constants";

describe("origin", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    });
    page = await browser.newPage();
    await page.goto(ORIGIN);
    await page.waitFor(() => {
      return !document.body.textContent.includes("Loading");
    });
  }, 10000);

  afterAll(async () => {
    browser.close();
  });

  it(`redirects to "/login"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}/login`);
  }, 10000);

  it("renders LoginPage component", async () => {
    expect(await page.$(".LoginPage")).not.toBeNull();
  }, 10000);
});
