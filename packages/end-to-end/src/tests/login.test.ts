import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";

describe("on success", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(`${ORIGIN}/login`);
    await page.type("#login-email", "test_user1@email.com");
    await page.type("#login-password", "test_user1password");
    await page.click(`.LoginForm button[type="submit"]`);
    await page.waitForNavigation();
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
