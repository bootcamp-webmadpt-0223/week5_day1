// Get element by id
const catDiv = document.getElementById("cat");
console.log(catDiv);
// Get elements by class
const mice = document.getElementsByClassName("mouse");
const mainMice = document.getElementsByClassName("mouse main");
const miceArr = [...mice];
console.log(mice, miceArr);
const mainMouse = mainMice[0];
// Change element content (html, text...)
mainMouse.innerText = "Main Mouse";
// document.body.innerHTML = "New content";

// Change element properties (style, classname, id, parent...)
mainMouse.style.backgroundColor = "red";
mainMouse.className = "";
mainMouse.id = "main-mouse";
const dog = document.getElementById("dog");
console.log(dog.parentElement);

// Get elements by tag name
const h3Dog = document.getElementsByTagName("h3");
console.log(h3Dog);

// querySelector
const animals = document.querySelector("#animals");
console.log(animals);

// querySelectorAll
const miceQueryS = document.querySelectorAll(".mouse");
console.log(miceQueryS);
