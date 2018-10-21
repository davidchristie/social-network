import puppeteer, { Browser, Page } from "puppeteer";

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
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.url() === process.env.PRODUCTION_API_ENDPOINT) {
      return interceptedRequest.continue({
        url: process.env.PUBLIC_API_ENDPOINT
      });
    }
    interceptedRequest.continue();
  })
  return page;
}
