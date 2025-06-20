import { getFirstWeekdayOfMonth } from "../../common.mjs";

describe('Test the getFirstWeekdayOfMonth function', () => {
  test("Should return the first Friday in May 2025", () => {
    const result = getFirstWeekdayOfMonth(2025, 4, 5);

    expect(result).toEqual(new Date(2025, 4, 2));
  });

  test("Should return the first Sunday in February 2024", () => {
    const result = getFirstWeekdayOfMonth(2024, 1, 0);

    expect(result).toEqual(new Date(2024, 1, 4)); 
  });

  test("Should return null for invalid dayIndex", () => {
    const result = getFirstWeekdayOfMonth(2024, 1, 7);
    expect(result).toBeNull();
  });
});