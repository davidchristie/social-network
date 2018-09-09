import puppeteer, { Browser, Page } from "puppeteer";

interface Context {
  browser: Browser;
  page: Page;
}

interface Options {
  url?: string;
}

type Callback = (context: Context) => void;

export default function launchPuppeteer (options: Options = {}, callback: Callback) {
  const context = {} as Context;

  beforeAll(async () => {
    context.browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
    });
    context.page = await context.browser.newPage();
    if (options.url) {
      await context.page.goto(options.url);
    }
  });

  afterAll(async () => {
    await context.browser.close();
  });

  callback(context);
}
