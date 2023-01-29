import { checkBuzz } from "./checkBuzz";
import { checkFizz } from "./checkFizz";
import { checkFizzBuzz } from "./checkFizzBuzz";
import { makeArray } from "./makeArray";

type TFizzBuzzArr = (number | "Fizz" | "Buzz" | "FizzBuzz")[];

export function fizzBuzz(inputNum: number): string {
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
  const finalString: string = fizzBuzzArr.join(",");
  return finalString;
}
