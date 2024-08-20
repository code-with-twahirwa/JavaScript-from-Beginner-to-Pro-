//JS EVENTS - An event is a signal that executes or performs a particular task

//ADDING EVENTS
//click event
function changeBG() {
  const c1 = Math.floor(Math.random() * 100);
  const c2 = Math.floor(Math.random() * 150);
  const c3 = Math.floor(Math.random() * 200);
  const randomBGColor = `rgb(${c1} ${c2} ${c3})`;
  document.body.style.backgroundColor = randomBGColor;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", changeBG);

//focus event
const inputEl = document.querySelector("input");
function focusInput() {
  inputEl.setAttribute("placeholder", "Enter your name here");
}
inputEl.addEventListener("focus", focusInput);

//keypress event
const aborter = new AbortController();
inputEl.addEventListener("keypress", (event) => {
  const pressedKey = event.key;
  console.log(`The pressed key is--- ${pressedKey}`),
    { signal: aborter.signal };
});

//I advice you to research more to find out all the events available on each element

//REMOVE EVENTS
//btn.removeEventListener("click", changeBG);
aborter.abort();

