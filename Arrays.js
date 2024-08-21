//ARRAYS - An array is a special object that organizes or stores multiple values or items in a list.

const array = ["a", "b", "c", "d"];
console.log(array[2]);
console.log(array.indexOf("c"));
const arrLength = array.length;
console.log(arrLength);

//METHODS ON ARRAYS
//Static array methods
const arr = new Array("Twahirwa", "Sam");
console.log(arr);
const arrOfNums = Array.from("1234");
console.log(arrOfNums);
const mixedArr = Array.of(1, "a", ["cat", "cow", "goat"]);
console.log(mixedArr);

//Instance methods
const btn1 = document.getElementById("btn2");
btn1.addEventListener("click", removeName);

const arrNames = ["muhire", "ntwari", "umutoni", "ishema"];

function addName() {
  //push() method
  const count = arrNames.push("umulisa");
  console.log(count);
  console.log(`The new arr of names is ${arrNames}`);
  //unshift() method
  const count2 = arrNames.unshift("kalisa");
  console.log(count2);
  console.log(`The new arr of names is--- ${arrNames}`);
}

function removeName() {
  //pop() method
  const removedName = arrNames.pop("umulisa");
  console.log(removedName);
  console.log(`The new arr of names is ${arrNames}`);
  //shift() method
  const removedName_ = arrNames.shift();
  console.log(removedName_);
  console.log(`The new arr of names is ${arrNames}`);
}

//Iterative methods
const arrOfAnimals = ["cat", "dog", "rabbit", "hen"];

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", addNumbers);
const arrOfNumbers = [1, 2, 3, 4, 8, 9, 20, 50, 55, 56];

function iterateOverArray() {
  //map() method - returns a new array
  arrOfAnimals.map((item, index) => {
    console.log(index);
    console.log("The item in the arr being shown is ---", item);
  });
}

function filterNums() {
  //filter() method - returns a new arr with items that meet a given condition
  const newArrNums = arrOfNumbers.filter((item, index) => {
    console.log(index);
    return item > 10;
  });
  console.log(newArrNums);
}

function addNumbers() {
    //reduce method - returns the sum of all the numbers in the array for our case
  const sum = arrOfNumbers.reduce((accumulator, currentValue) => {
    console.log(
      `The accumulator is ${accumulator} and the current value is ${currentValue}`
    );
    return accumulator + currentValue;
  });

  console.log(`The sum of the numbers in the array is ${sum}`);
}
