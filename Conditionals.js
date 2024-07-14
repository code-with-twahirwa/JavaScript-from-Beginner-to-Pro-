/**
 * CONDITIONAL STATEMENTS -> Used to execute code/perform a given task only when a given condition is met
 * if....else.... statements
 */

const checkNumber = () => {
  const inputNum = document.getElementById("integer_str");
  const _num = inputNum.value;
  console.log(typeof _num);
  const num = Number(_num);
  console.log(typeof num);
  console.log(num);

  const response_Para = document.getElementById("int_type");

  // Conditional statement
  if (num % 2 === 0) {
    response_Para.innerHTML = `=> The number you have entered is ${num} and it is an even number`;
  } else {
    response_Para.innerHTML = `=> The number you have entered is ${num} and it is an odd number`;
  }
};

const generateRandomNum = () => {
  const randomNum = Math.random();
  console.log(`The generated randomNum is ${randomNum}`);
  const num = randomNum * 1000;
  console.log(`The generated big randomNum is ${num}`);
  const int = Math.floor(num);
  console.log(`The generated random integer is ${int}`);

  // Conditional statement
  if (int < 10) {
    writeResponse(int, 0, 10);
  } else if (int > 10 && int < 100) {
    writeResponse(int, 10, 100);
  } else {
    writeResponse(int, 100, 1000);
  }
};

function writeResponse(int, range1, range2) {
  const response_para = document.getElementById("response");
  const listEl = document.createElement("li");
  listEl.innerHTML =
    "The random number generated is " +
    int +
    " and it lies between " +
    range1 +
    " and " +
    range2;

  response_para.appendChild(listEl);
}
