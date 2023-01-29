import { FizzBuzz } from "./FizzBuzz";

test("checks the fizzbuzz array", () => {
  expect(FizzBuzz(3)).toEqual([1, 2, "Fizz"]);
  expect(FizzBuzz(9)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"]);
  expect(FizzBuzz(15)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
  expect(FizzBuzz(2)).toEqual([1, 2]);
});
