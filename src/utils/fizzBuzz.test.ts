import { fizzBuzz } from "./fizzBuzz";

test("checks the fizzbuzz array", () => {
  expect(fizzBuzz(3)).toEqual("1,2,Fizz");
  expect(fizzBuzz(9)).toEqual("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz");
  expect(fizzBuzz(15)).toEqual(
    `1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz`
  );
  expect(fizzBuzz(2)).toEqual("1,2");
});
