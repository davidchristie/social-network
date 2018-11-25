import { Page } from "puppeteer";

import { WEB_CLIENT_HOST } from "../../constants/hosts";
import { USER_1_EMAIL, USER_1_PASSWORD } from "../../constants/login";
import itRedirectsTo from "../../utilities/itRedirectsTo";
import newPage from "../../utilities/newPage";

describe("on success", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(`${WEB_CLIENT_HOST}/login`);
    await page.type("#login-email", USER_1_EMAIL);
    await page.type("#login-password", USER_1_PASSWORD);
    await page.click(`.LoginForm button[type="submit"]`);
    await page.waitForNavigation();
  });

  it(`does not show alert messages`, async () => {
    expect(await page.$(".Alert")).toBeNull();
  });

  itRedirectsTo(() => page, "/");

  it("renders HomePage component", async () => {
    await page.waitForSelector(".HomePage");
    expect(await page.$(".HomePage")).not.toBeNull();
  });
});
