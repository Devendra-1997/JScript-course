// Operator in js
// used to perform some operation in data

// Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);

// console.log("a % b = ", a % b); //modulus
// console.log("a ** b = ", a ** b); //Exponentiation

// Unary Operators
// increment and decrement

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// // a = a + 1;
// // a++; post increment
// // a--;
// a = a - 1;
// console.log("a = ", a);

// ++a (post increment)

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);

// console.log("++a ", ++a);
// console.log("a = ", a);

// Assignment Operators
// to asign value

// let a = 5;
// let b = 2;

// a += 4;
// a -= 4;
// a **= 4;
// a %= 4;

// console.log("a += ", a);
// console.log("a -= ", a);
// console.log("a %= ", a);
// console.log("a **= ", a);

// comparison operators

// let a = 5;
// let b = 2;

// console.log("a === b", a === b);
// console.log("a !== b", a !== b);

// logical operators

// logical &&

// let a = 6;
// let b = 4;

// // let cond1 = a > b;
// // let cond2 = a === 6;

// console.log(" a = ", a, "& b = ", b);
// // console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 && cond2", a > b && a === 6);

// logical OR
// let a = 6;
// let b = 4;

// let cond1 = a > b;
// let cond2 = a === 6;

// console.log(" a = ", a, "& b = ", b);
// // console.log("cond1 && cond2", cond1 || cond2);
// console.log("cond1 && cond2", a > b && a === 6);

// WE LEARNED OPERATORS IN ORDER TO CHECK THE CONDITIONS

// conditional statements
// to implement some condition in the code

// if statement
// let age = 25;
// // if (age > 18) {
// //   console.log("you can drive");
// // }
// if (age < 18) {
//   console.log("you can drive");
// }

// let mode = "light";
// let color;
// if (mode === "dark") {
//   color = "black";
// }

// if (mode === "light") {
//   color = "white";
// }
// console.log(color);

// if-else statements
// let mode = "light";
// let color;
// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);

// odd or even
// let num = 13;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// syntax = rules for writing code

// else-if statement

// let age = 20;

// if (age < 18) {
//   console.log("junior");
// }

// let mode = "pink";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }

// console.log(color);

// some challange question

// write a code which can give grades to students according to their scores.
// 90 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

// let score = prompt("enter your score (0-100)");
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// }
// console.log("According to your scores, you have got", grade);

// loops in js

// loops are used to execute a piece of code again and again.loops are used to calculate the logic.

// for loop

// for (intialization, stopping condition, updatation)
// for (let i = 1; i <= 5; i++) {
//   console.log("loops in js");
// }

// for example:

// calculate the sum of 1 to 5

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("loop can not continue further");

// print 1 to 5

// for (let i = 1; i <= 5, i++; ) {
//   console.log("i = ", i);
// }

// while loop

// let i = 1;
// while (i <= 10) {
//   console.log("loops in js");
//   i++;
// }

// do-while loop

// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);

// challange questions

// create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 20;
// let userNum = prompt("Enter the game number. Guess your number ");

// while (userNum != gameNum) {
//   userNum = prompt("you entered the wrong the number.Please try again ");
// }
// console.log("Congrats, you guessed the right number");

// next topic : String in Js

// practice questions
// prompt the user to enter their full name. Generate a username for them baased on the input. start username with @, followed by their full name and ending with fullname length.

// let fullName = prompt("Enter your full name");

// let username = "@" + fullName + fullName.length;
// console.log(username);

// create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 20;
// let userNum = prompt("Enter your game number");

// while (gameNum != userNum) {
//   userNum = prompt("You entered wrong number. try again");
// }
// console.log("congratulations you entered right number. ");

// Arrays in js
// collection of items

// let marks = [32, 56, 67, 89];
// console.log(marks);
// console.log(marks.length); // length is a property.
// console.log(marks[0]);

// looping over an array
// print all elements of an array

// Practice Questions
// For a given array with marks of students, [85, 97, 44, 37, 76, 60].Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// console.log(marks);

// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// console.log(sum);

// let avg = sum / marks.length;

// console.log(`the average marks of the class is ${avg}`);

// next question

// For  a given array with prices of 5 items, [250, 645, 300, 900, 50]. All items have an offer of 10% off on them. change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }

// console.log(items);

// Functions in JS

// Qs. Create a function using the “function” keyword that takes a String as an argument &
// // returns the number of vowels in the string.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// Qs. Create an arrow function to perform the same task.

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
