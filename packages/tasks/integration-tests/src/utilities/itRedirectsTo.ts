import { Page } from "puppeteer";
import { WEB_CLIENT_HOST } from "../constants/hosts";

export default function itRedirectsTo (getPage: () => Page, path: string) {
  it(`redirects to "${path}"`, async () => {
    expect(await getPage().url()).toEqual(`${WEB_CLIENT_HOST}${path}`);
  });
}
