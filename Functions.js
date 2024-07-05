/**
 * Function - a set of instructions that we use to perform a given task
 * It is declared using the "function keyword"
 *
 * Types of functions
 * -one that uses the "function" keyword
 * -arrow function
 *
 * Can have a return/output or none - look at the "return" keyword
 * Shorthand of writing an arrow function
 */

function enterName() {
  const nameInput = document.getElementById("name_input");
  const fullName = nameInput.value;
  const namePara = document.createElement("p");
  namePara.innerHTML = fullName;
  const parentPara = document.getElementById("enter_name");
  parentPara.appendChild(namePara);
  nameInput.value = "";
}

function printFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  console.log(fullName);
}

function addCountryName() {
  const countryNameInput = document.getElementById("countryName");
  const countryName = countryNameInput.value;
  const countryNameListEl = document.createElement("li");
  countryNameListEl.innerHTML = countryName;
  const countryNamePara = document.getElementById("list_of_countries");
  countryNamePara.appendChild(countryNameListEl);
  countryNameInput.value = "";
}

const generateRandomNumber = () => {
  const randonNum = Math.random(); // generates a random number btn 0 - 1 with many decimal places
  console.log("The random num is", randonNum);
  const bigNum = randonNum * 100;
  console.log("The bigNum is", bigNum);
  const integer = Math.floor(bigNum);
  console.log("The generated random int is", integer);
};

//the return keyword -> gives us the function output which we can then pass into a variable
// const sayGoodBye = () => {
//   const bye = "Good bye";
//   return bye;
// };

//ShortHand of writing an arrow function
const sayGoodBye = () => "Good bye";
 
const printGoodBye = () => {
  const byeMsg = sayGoodBye();
  console.log("The function says-", byeMsg)
};
