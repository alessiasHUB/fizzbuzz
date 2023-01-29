import { checkBuzz } from "./checkBuzz";
import { checkFizz } from "./checkFizz";
import { checkFizzBuzz } from "./checkFizzBuzz";
import { makeArray } from "./makeArray";

export type TFizzBuzzArr = (number | "Fizz" | "Buzz" | "FizzBuzz")[];

export function fizzBuzz(inputNum: number): TFizzBuzzArr {
  const numArr = makeArray(inputNum);
  const fizzBuzzArr: TFizzBuzzArr = [];
  for (const num of numArr) {
    if (checkFizzBuzz(num)) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (checkFizz(num)) {
      fizzBuzzArr.push("Fizz");
    } else if (checkBuzz(num)) {
      fizzBuzzArr.push("Buzz");
    } else {
      fizzBuzzArr.push(num);
    }
  }
  return fizzBuzzArr;
}
