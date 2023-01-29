import { checkFizzBuzz } from "./checkFizzBuzz";

test("checks if num is divisible by 3 and 5 and returns num or true", () => {
  expect(checkFizzBuzz(3)).toEqual(false);
  expect(checkFizzBuzz(10)).toEqual(false);
  expect(checkFizzBuzz(15)).toEqual(true);
  expect(checkFizzBuzz(30)).toEqual(true);
});
