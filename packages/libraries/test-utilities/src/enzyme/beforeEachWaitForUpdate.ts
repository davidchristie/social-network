import { Wrapper } from "./types";

export default function beforeEachWaitForUpdate (getWrapper: () => Wrapper) {
  beforeEach(async () => {
    await new Promise(resolve => window.setTimeout(resolve, 0));
    getWrapper().update();
  });
}
