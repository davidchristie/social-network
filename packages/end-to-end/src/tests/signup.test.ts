import faker from "faker";
import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";

describe("on success", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(`${ORIGIN}/signup`);
    await page.waitForSelector(".SignupForm");
    await page.type("#signup-name", faker.name.firstName());
    await page.type("#signup-email", faker.internet.email());
    await page.type("#signup-password", faker.internet.password());
    await page.click(`.SignupForm button[type="submit"]`);
    await page.waitForNavigation();
    await page.waitForSelector(".HomePage");
  }, 10000);

  it(`does not show alert messages`, async () => {
    expect(await page.$(".Alert")).toBeNull();
  }, 10000);

  it(`redirects to "/"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}/`);
  }, 10000);

  it("renders HomePage component", async () => {
    expect(await page.$(".HomePage")).not.toBeNull();
  }, 10000);
});
