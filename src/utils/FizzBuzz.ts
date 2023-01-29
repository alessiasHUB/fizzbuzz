import { checkBuzz } from "./checkBuzz";
import { checkFizz } from "./checkFizz";
import { checkFizzBuzz } from "./checkFizzBuzz";
import { makeArray } from "./makeArray";

export type TFizzBuzzArr = (number | "Fizz" | "Buzz" | "FizzBuzz")[];

export function FizzBuzz(inputNum: number): TFizzBuzzArr {
  const numArr = makeArray(inputNum);
  const FizzBuzzArr: TFizzBuzzArr = [];
  for (const num of numArr) {
    if (checkFizzBuzz(num)) {
      FizzBuzzArr.push("FizzBuzz");
    } else if (checkFizz(num)) {
      FizzBuzzArr.push("Fizz");
    } else if (checkBuzz(num)) {
      FizzBuzzArr.push("Buzz");
    } else {
      FizzBuzzArr.push(num);
    }
  }
  return FizzBuzzArr;
}
