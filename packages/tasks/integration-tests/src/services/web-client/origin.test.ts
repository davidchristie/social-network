import { Page } from "puppeteer";
import { WEB_CLIENT_HOST } from "../../constants/hosts";
import itRedirectsTo from "../../utilities/itRedirectsTo";
import newPage from "../../utilities/newPage";

describe("origin", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(WEB_CLIENT_HOST);
  });

  itRedirectsTo(() => page, "/login");

  it("renders LoginPage component", async () => {
    await page.waitForSelector(".LoginPage");
    expect(await page.$(".LoginPage")).not.toBeNull();
  });
});
