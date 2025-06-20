// import assert from "node:assert";
// import test from "node:test";

import { 
  getGreeting
} from "./common.mjs";

test("Greeting is correct", () => {
  expect(getGreeting()).toBe('Hello');
});
