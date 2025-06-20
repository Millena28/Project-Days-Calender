import { specificDayOfMonth  } from "../../common.mjs";

describe('specificDayOfMonth', () => {
  test('returns the 2nd Tuesday of March 2025', () => {
    const result = specificDayOfMonth(2025, "March", "Tuesday", "second");
    expect(result.getTime()).toBe(new Date(2025, 2, 11).getTime());
  });

  test('returns the last Friday of October 2025', () => {
    const result = specificDayOfMonth(2025, "October", "Friday", "last");
    expect(result.getTime()).toBe(new Date(2025, 9, 31).getTime());
  });

  test('returns null for 5th Monday in February 2024', () => {
    const result = specificDayOfMonth(2024, "February", "Monday", "fifth");
    expect(result).toBeNull();
  });

  test('returns null for invalid day', () => {
    const result = specificDayOfMonth(2025, "March", "Funday", "second");
    expect(result).toBeNull();
  });

  test('returns null for invalid occurrence', () => {
    const result = specificDayOfMonth(2025, "March", "Tuesday", "seventh");
    expect(result).toBeNull();
  });

  test('returns null for invalid month', () => {
    const result = specificDayOfMonth(2025, "Smarch", "Tuesday", "second");
    expect(result).toBeNull();
  });
});

