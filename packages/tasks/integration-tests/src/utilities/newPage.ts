import puppeteer, { Browser, Page } from "puppeteer";

import {
  PRODUCTION_API_ENDPOINT,
  PUBLIC_API_ENDPOINT
} from "../constants";

let browser: Browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
}, 10000);

afterAll(async () => {
  browser.close();
});

export default async function newPage() {
  const page: Page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (interceptedRequest) => {
    if (interceptedRequest.url() === PRODUCTION_API_ENDPOINT) {
      return interceptedRequest.continue({
        url: PUBLIC_API_ENDPOINT
      });
    }
    interceptedRequest.continue();
  })
  return page;
}
