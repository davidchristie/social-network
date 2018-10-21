import { Page } from "puppeteer";

import { ORIGIN } from '../constants'

export default function itRedirectsTo(getPage: () => Page, path: string) {
  it(`redirects to "${path}"`, async () => {
    expect(await getPage().url()).toEqual(`${ORIGIN}${path}`);
  });
}
