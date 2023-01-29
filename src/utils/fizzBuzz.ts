import { checkBuzz } from "./checkBuzz";
import { checkFizz } from "./checkFizz";
import { checkFizzBuzz } from "./checkFizzBuzz";
import { makeArray } from "./makeArray";

/**
 * PROBLEM DESCRIPTION:
 * Write a function that takes in an integer 'n' and returns a string of numbers from 1 to 'n' separated by a comma, where:
 * if the number is divisible by 3, the number should be replaced with "Fizz"
 * if the number is divisible by 5, the number should be replaced with "Buzz"
 * if the number is divisible by both 3 and 5, the number should be replaced with "FizzBuzz"
 * Example:
 * Input: n = 15
 * Output: "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
 * Note:
 * The output string should contain numbers separated by a comma.
 * The output string should not have any extra spaces or newlines.
 * @param inputNum a number
 * @returns a string
 */

/**
 * PSEUDO CODE
 * make an array starting from 1 and ends with INPUT_NUM --------------makeArray.ts
 * DECLARE FIZZBUZZ_ARR and set it to an empty array
 *
 * FOR EACH NUM of NUM_ARR
 *  IF NUM is divisible by 3 and 5
 *    PUSH the string "FIZZBUZZ" to FIZZBUZZ_ARR ----------------------checkFizzBuzz.ts
 *  ELSE IF NUM is divisible by 3
 *    PUSH the string "FIZZ" to FIZZBUZZ_ARR --------------------------checkFizz.ts
 *  ELSE IF NUM is divisible by 5
 *    PUSH the string "BUZZ" to FIZZBUZZ_ARR --------------------------checkBuzz.ts
 *  ELSE
 *    PUSH num to FIZZBUZZ_ARR
 *  END IF
 * END FOR
 *
 * RETURN FIZZBUZZ_ARR as a string where each element is seperated by a comma (,)
 *
 * example:
 * FIZZBUZZ_ARR = [1, 2, "Fizz"]  ----->  RETURN "1,2,Fizz"
 */
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
  return fizzBuzzArr.join(",");
}
