import { makeArray } from "./makeArray";

test("given a number (num), make an array from 1 to num", () => {
  expect(makeArray(3)).toEqual([1, 2, 3]);
  expect(makeArray(1)).toEqual([1]);
  expect(makeArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(makeArray(6)).toEqual([1, 2, 3, 4, 5, 6]);
});
