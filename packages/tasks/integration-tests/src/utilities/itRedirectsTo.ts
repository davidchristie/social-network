import { Page } from "puppeteer";

import { ORIGIN } from '../constants'

export default function itRedirectsTo(page: Page, path: string) {
  it(`redirects to "${path}"`, async () => {
    expect(await page.url()).toEqual(`${ORIGIN}${path}`);
  });
}
