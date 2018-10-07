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

export default function newPage () {
  return browser.newPage();
}
