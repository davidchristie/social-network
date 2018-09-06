import puppeteer, { Browser, Page } from "puppeteer";


describe("origin page", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
  });

  afterAll(async () => {
    await browser.close();
  });

  it(`redirects to "/login"`, async () => {
    await page.waitForNavigation();
    expect(await page.url()).toEqual("http://localhost:3000/login");
  });

  it("renders LoginPage component", async () => {
    expect(await page.$(".LoginPage")).not.toBeNull();
  });

  it("matches snapshot", async () => {
    expect(await page.content()).toMatchSnapshot();
  });
});
