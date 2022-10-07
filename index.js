/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

function area(l1, l2) {
  const formula = l1 * l2;
  return formula;
  //   console.log(formula);
}

console.log(area(200, 31212));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    console.log((sum = sum * 3));
  } else {
    console.log(sum);
  }
}

crazySum(6, 6);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

function crazyDiff(number) {
  let absDiff = 19 - number;
  //   console.log(absDiff);
  if (number > 19) {
    absDiff = absDiff * 3;
  }
  console.log(absDiff);
}

crazyDiff(20);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

function boundary(y) {
  if ((y >= 20 && y <= 100) || y == 400) {
    console.log('True');
  } else {
    console.log('False');
  }
}

boundary(50);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "strivify", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

function strivify(stringParam) {
  let emptyStr = '';
  emptyStr = 'Strive' + ' ' + stringParam;
  if (stringParam === 'Strive') {
    emptyStr = stringParam;
  }
  console.log(emptyStr);
}

strivify('Strive');

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

function check3and7(x, y) {
  let set = [x, y];
  for (let num of set) {
    num > 0;
    if (num % 3 == 0) {
      console.log(x + ' ' + 'is the mutliple of 3');
    } else if (num % 7 == 0) {
      console.log(y + ' ' + 'is the mutliple of 7');
    }
  }
}

check3and7(3, 14);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

function reverseString(word) {
  let reversedString = word.split('').reverse().join('');
  console.log(reversedString);
}

reverseString('Strive');

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function upperFirst(wordGiven) {
  let firstLetter = wordGiven.charAt(0);
  let remainingLetter = wordGiven.slice(1);
  let capitalizedLetter = firstLetter.toUpperCase();
  let finalWord = capitalizedLetter + remainingLetter;
  //   console.log(firstLetter);
  //   console.log(remainingLetter);
  //   console.log(capitalizedLetter);
  console.log(finalWord);
}

upperFirst('strive');

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function cutString(stringInput) {
  let cutWords = stringInput.slice(1, -1);
  console.log(cutWords);
}

cutString('Leon');
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

function giveMeRandom(n) {
  let numberz = '';
  let finalz;
  n = n - 1;
  while (n < 9) {
    n = n + 1;
    numberz = numberz + n;
    finalz = numberz.split('');
  }
  console.log(finalz);
}

giveMeRandom(2);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
