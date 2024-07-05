/**
 * VARIABLES
 * A variable is a container or holder of information
 * A variable is declared  using some keywords like const or let in JS
 * We assign a variable a value using the equals sign
 */

const firstName = "John";
console.log(firstName);
let lastName = "Mutabazi";
console.log(lastName);
lastName = "Twahirwa";
console.log(lastName);

// DATA TYPES
//1. String ( A series of characters enclosed in quotation marks)
const fullName = "MukizaBarak";
console.log("His fullname is", fullName);
const stringedNums = "01247";
console.log(stringedNums);

//2. Numbers (numerical values)
const number = 1;
let bigNumber = 1000;
bigNumber = 1200;
console.log(bigNumber);

//3. Boolean (A datatype represented by true or false)
const isTrue = true;
console.log(isTrue);
const isFalse = false;
console.log(isFalse);

//4. Objects (So an object is a data type that contains key value pairs or properties and their assigned values)
const person = {
  name: "John Garvey",
  age: 55,
  height: "6ft",
  homeTown: "Kinshasa",
};

console.log(person);

const bird = {
  name: "Eagle",
  isScavenger: true,
  hasHookedBeak: true,
  color: "varies",
};
console.log(bird);

//5. Arrays (A array is a object that has values or items enclosed in square brackets/braces which are separated by commas)
const numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
const stringArr = ["one", "two", "three", "four", "five"];
console.log(stringArr);
const mixedArr = [
  1,
  "one",
  2,
  "two",
  3,
  "three",
  4,
  "four",
  5,
  "five",
  true,
  false,
  { name: "Jane", age: 25 },
];
console.log(mixedArr);

//6. Null (means nothing)
const nothing = null;
console.log(nothing);

//7. Undefined
let time;
console.log(time);
// THANKS FOR WATCHING


