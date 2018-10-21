import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";
import itRedirectsTo from "../utilities/itRedirectsTo";
import waitForLoading from "../utilities/waitForLoading";

describe("origin", () => {
  let page: Page;

  beforeAll(async () => {
    page = await newPage();
    await page.goto(ORIGIN);
    await waitForLoading(page);
  });

  itRedirectsTo(() => page, "/login");

  it("renders LoginPage component", async () => {
    expect(await page.$(".LoginPage")).not.toBeNull();
  });
});
