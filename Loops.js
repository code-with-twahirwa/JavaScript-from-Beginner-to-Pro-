//LOOPS -  a loop programming tool that helps us to iterate or to repeat over a given set of data
/**
 * for loop
 * do...while loop
 * for...of loop
 * for...in loop
 */

// For loop
const runForLoop = () => {
  for (i = 0; i < 5; i++) {
    console.log(i);
    const data_para = document.getElementById("data");
    const childEl = document.createElement("p");
    childEl.innerHTML = `The iterattion value in this loop is ${String.fromCodePoint(
      0x1f609
    )} ${i}`;
    data_para.appendChild(childEl);
  }
};

//do..while loop
let a = 5;
const runDoWhileLoop = () => {
  do {
    console.log("The initial value of a is", a);
    a -= 1;
    console.log("The new value of a is", a);
  } while (a > 0);
};

//for...of loop
const names = ["mukiza", "manzi", "mutabazi", "munezero", "twishime", "mutuzo"]
function runForOfLoop(){
  for(_name of names){
     console.log("The current name being shown in the array is", _name)
  }
}

//for in loop
const obj = {
  name:"Felix T",
  age: 35,
  homeCity: "Kinshasa",
  profession:"Comedian"
}
function runForInLoop(){
  for (prop in obj){
    console.log("The property being shown is---", prop)
    console.log("The value of the prop being shown is---", obj[prop])
  }
}
