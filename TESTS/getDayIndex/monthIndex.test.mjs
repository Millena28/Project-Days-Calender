import { getMonthIndex, getDayIndex } from "../../common.mjs";

test("Should return the right month index", () => {
  expect(getMonthIndex('December')).toBe(11);
  expect(getMonthIndex('January')).toBe(0);
  expect(getMonthIndex('February')).toBe(1);
  expect(getMonthIndex('May')).toBe(4);
  expect(getMonthIndex('October')).toBe(9);
});

test("Should return the right day index", () => {
  expect(getDayIndex('Tuesday')).toBe(2);
  expect(getDayIndex('Sunday')).toBe(0);
  expect(getDayIndex('Monday')).toBe(1);
  expect(getDayIndex('Wednesday')).toBe(3);
  expect(getDayIndex('Thursday')).toBe(4);
  expect(getDayIndex('Friday')).toBe(5);
  expect(getDayIndex('Saturday')).toBe(6);
});
