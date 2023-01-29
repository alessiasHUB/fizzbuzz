"use strict";
exports.__esModule = true;
exports.fizzBuzzCommandLine = void 0;
var checkBuzz_1 = require("./checkBuzz");
var checkFizz_1 = require("./checkFizz");
var checkFizzBuzz_1 = require("./checkFizzBuzz");
var makeArray_1 = require("./makeArray");
function fizzBuzzCommandLine(inputNum) {
    var numArr = (0, makeArray_1.makeArray)(inputNum);
    var fizzBuzzArr = [];
    for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
        var num = numArr_1[_i];
        if ((0, checkFizzBuzz_1.checkFizzBuzz)(num)) {
            fizzBuzzArr.push("FizzBuzz");
        }
        else if ((0, checkFizz_1.checkFizz)(num)) {
            fizzBuzzArr.push("Fizz");
        }
        else if ((0, checkBuzz_1.checkBuzz)(num)) {
            fizzBuzzArr.push("Buzz");
        }
        else {
            fizzBuzzArr.push(num);
        }
    }
    return fizzBuzzArr.join(",");
}
exports.fizzBuzzCommandLine = fizzBuzzCommandLine;
var input = process.argv[2];
var parsedInput = Number(input);
if (isNaN(parsedInput)) {
    console.error("Input is not a number.");
    process.exit(1);
}
console.log(fizzBuzzCommandLine(parsedInput));
// run the program in the command line like this:
// node index.js 10
//   replace the ^^ with any number you want
