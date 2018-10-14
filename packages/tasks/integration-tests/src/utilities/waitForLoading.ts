import { Page } from "puppeteer";

export default async function waitForLoading (page: Page) {
  await page.waitFor(() => {
    return !document.body.textContent.includes("Loading");
  });
}
