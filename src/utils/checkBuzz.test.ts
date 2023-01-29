import { checkBuzz } from "./checkBuzz";

test("checks if num is divisible by 5 and returns num or true", () => {
  expect(checkBuzz(3)).toEqual(false);
  expect(checkBuzz(1)).toEqual(false);
  expect(checkBuzz(10)).toEqual(true);
  expect(checkBuzz(20)).toEqual(true);
});
