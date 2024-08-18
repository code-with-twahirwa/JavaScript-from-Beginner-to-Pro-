// JS scope
/**
 * JS scope refers to the extent of the accessibility of a given variable within your JS code
 * -- where in the JS code one can access a variable or cannot access it for any given manipulation
 */

const gender = "male"; // this var has global scope

function defineYourGender() {
  console.log("My gender is", gender);
}

function whatisYourGender() {
  console.log("Again my gender is ", gender);
}

function defineHisAge() {
  const hisAge = 80; // var hisAge only has local scope and can only be accessed within this function
  console.log("His age is", hisAge);
}

console.log(gender)
// console.log(hisAge)
