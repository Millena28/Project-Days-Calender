import { 
  getGreeting, 
  getMonthIndex, 
  getDayIndex, 
  getOccurrenceNumber, 
  getFirstWeekdayOfMonth, 
  getLastWeekdayOfMonth, 
  specificDayOfMonth 
} from "./common.mjs";


// import assert from "node:assert";
// import test from "node:test";

test("Greeting is correct", () => {
  expect(getGreeting()).toBe('Hello');
});
