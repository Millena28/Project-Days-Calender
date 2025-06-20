import { getOccurrenceNumber } from "../../common.mjs";

test("Should get the correct occurrence number", () => {
  expect(getOccurrenceNumber('first')).toBe(1);
  expect(getOccurrenceNumber('second')).toBe(2);
  expect(getOccurrenceNumber('third')).toBe(3);
  expect(getOccurrenceNumber('fourth')).toBe(4);
  expect(getOccurrenceNumber('fifth')).toBe(5);
});