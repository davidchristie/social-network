import launchPuppeteer from "../utilities/launchPuppeteer";

import { ORIGIN } from "../constants";

launchPuppeteer({ url: ORIGIN }, context => {
  describe("origin page", () => {
    it(`redirects to "/login"`, async () => {
      expect(await context.page.url()).toEqual(`${ORIGIN}/login`);
    });

    it("renders LoginPage component", async () => {
      expect(await context.page.$(".LoginPage")).not.toBeNull();
    });
  });
});
