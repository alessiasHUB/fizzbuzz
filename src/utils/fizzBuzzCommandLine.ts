import { checkBuzz } from "./checkBuzz";
import { checkFizz } from "./checkFizz";
import { checkFizzBuzz } from "./checkFizzBuzz";
import { makeArray } from "./makeArray";

export type TFizzBuzzArr = (number | "Fizz" | "Buzz" | "FizzBuzz")[];

export function fizzBuzzCommandLine(inputNum: number): string {
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

const input = process.argv[2];
const parsedInput = Number(input);
if (isNaN(parsedInput)) {
  console.error("Input is not a number.");
  process.exit(1);
}

console.log(fizzBuzzCommandLine(parsedInput));
// run the program in the command line like this:
// node index.js 10
//   replace the ^^ with any number you want
