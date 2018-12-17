import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});

// Mock global fetch
window.fetch = (() => Promise.resolve({} as Response)) as GlobalFetch["fetch"];
