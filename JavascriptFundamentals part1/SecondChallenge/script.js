/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
 1.Print a nice output to the console, saying who has the higher BMI.The message iseither "Mark's BMI is higher than John's!"or "John's BMI is higher than Mark's!"
 2.Use a template literal to include the BMI values in the outputs.Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"
 Hint:Use an if/elsestatement*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMArk = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMArk > BMIJohn


if (BMIMArk > BMIJohn) {
    console.log("Mark's BMI is higher than John's")
} else {
    console.log("John's BMI is higher than MArk's")
}