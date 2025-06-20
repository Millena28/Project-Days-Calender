import { getLastWeekdayOfMonth } from "../../common.mjs";

describe('Test the getLastWeekdayOfMonth function', () => {

  test('returns the last Friday in May 2025', () => {
    const result = getLastWeekdayOfMonth(2025, 4, 5); 
    expect(result).toEqual(new Date(2025, 4, 30)); 
  });

  test('returns the last Saturday in September 2024', () => {
    const result = getLastWeekdayOfMonth(2024, 9, 6); 
    expect(result).toEqual(new Date(2024, 9, 26)); 
  });

  test('returns the last Monday in February 2024 (leap year)', () => {
    const result = getLastWeekdayOfMonth(2024, 2, 1); 
    expect(result).toEqual(new Date(2024, 2, 25));
  });

  test('returns null for invalid weekday index (e.g., 7)', () => {
    const result = getLastWeekdayOfMonth(2024, 0, 7);
    expect(result).toBeNull();
  });

});