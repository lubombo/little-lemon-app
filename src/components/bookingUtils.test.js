import { initializeTimes, updateTimes } from './bookingUtils';

test('initializeTimes returns correct times array', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test('updateTimes returns same times regardless of date (for now)', () => {
  const date = new Date();
  const updated = updateTimes([], date);
  expect(updated).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
