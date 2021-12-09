/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

console.log("1.");
maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
  if (num1 > num2) return num1;
  else if (num1 < num2) return num2;
  else return "equals";
};
console.log("The max of 2 and 5 is: " + maxOfTwoNumbers(2, 5));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
console.log("\n2.");
maxOfThree = (num1, num2, num3) => {
  //ADD YOUR CODE HERE
  let largest = num1;
  if (largest < num2) largest = num2;
  if (largest < num3) largest = num3;

  return largest;
};
console.log("The largest number is: " + maxOfThree(2, 8, 4));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
console.log("\n3.");
isCharacterAVowel = (char) => {
  // ADD YOUR CODE HERE
  return (
    char === "a" ||
    char === "A" ||
    char === "e" ||
    char === "E" ||
    char === "i" ||
    char === "I" ||
    char === "o" ||
    char === "O" ||
    char === "u" ||
    char === "U"
  );
};
console.log('"i" is a vowel: ' + isCharacterAVowel("i"));
console.log('"B" is a vowel: ' + isCharacterAVowel("B"));

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

console.log("\n4.");
let myArr = [1, 2, 3, 4];
sumArray = () => {
  // ADD YOUR CODE HERE
  let sum = 0;
  for (let i of myArr) {
    sum += i;
  }
  return sum;
};
console.log(`Sum of array's numbers: ${sumArray()}`);
multiplyArray = () => {
  // ADD YOUR CODE HERE
  let product = 1;
  for (let i of myArr) {
    product *= i;
  }
  return product;
};
console.log(`Product of array's numbers: ${multiplyArray()}`);

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
console.log("\n5.");
countArgs = () => {
  let count = 0;
  for (let i of arguments) count++;
  return count;
};
console.log(`The number of arguments is ${countArgs(2, 5, 3, 7, 5)} `);

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
console.log("\n6");
let string = "jag tester";
reverseString = (string) => {
  // ADD YOUR CODE HERE

  //convert the string to array
  // const stringArr = string.split(""); also works
  const stringArr = [...string];

  //reverse the array elements
  let count = stringArr.length;
  for (let i = 0; i < count; i++, count--) {
    [stringArr[i], stringArr[count - 1]] = [stringArr[count - 1], stringArr[i]];
  }

  //convert the array back to a string
  return stringArr.join("");
};
console.log(string);
console.log(reverseString(string));

// /*
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// */
console.log("\n7.");
const words = ["tree", "javascript", "css", "conversation"];
findLongestWord = (list) => {
  // ADD YOUR CODE HERE
  let longest = list[0].length;
  for (let i = 1; i < list.length; i++) {
    if (longest < list[i].length) longest = list[i].length;
  }
  return longest;
};
console.log(`The longest word has : ${findLongestWord(words)} characters`);

// /*
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// */
console.log("\n8.");
const arrWords = ["house", "java", "realistic", "independent", "yes", "no"];
filterLongWords = (arr, num) => {
  // ADD YOUR CODE HERE
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) newArr.push(arr[i]);
  }
  return newArr;
};
console.log(filterLongWords(arrWords, 3));
