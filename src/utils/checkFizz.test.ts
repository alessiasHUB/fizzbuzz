import { checkFizz } from "./checkFizz";

test("checks if num is divisible by 3 and returns num or true", () => {
  expect(checkFizz(3)).toEqual(true);
  expect(checkFizz(1)).toEqual(false);
  expect(checkFizz(9)).toEqual(true);
});
