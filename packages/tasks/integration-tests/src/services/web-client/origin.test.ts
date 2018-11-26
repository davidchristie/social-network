import { Page } from "puppeteer";

import { WEB_CLIENT_HOST } from "../../constants/hosts";
import itRedirectsTo from "../../utilities/itRedirectsTo";
import newPage from "../../utilities/newPage";
import waitForLoading from "../../utilities/waitForLoading";

describe("origin", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(WEB_CLIENT_HOST);
    await waitForLoading(page);
  });

  itRedirectsTo(() => page, "/login");

  it("renders LoginPage component", async () => {
    await page.waitForSelector(".LoginPage");
    expect(await page.$(".LoginPage")).not.toBeNull();
  });
});
