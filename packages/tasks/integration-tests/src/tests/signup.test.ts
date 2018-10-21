import faker from "faker";
import { Page } from "puppeteer";

import { ORIGIN } from "../constants";
import newPage from "../utilities/newPage";
import itRedirectsTo from "../utilities/itRedirectsTo";

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
  });

  it(`does not show alert messages`, async () => {
    expect(await page.$(".Alert")).toBeNull();
  });

  itRedirectsTo(page, "/");

  it("renders HomePage component", async () => {
    expect(await page.$(".HomePage")).not.toBeNull();
  });
});
