// Manipulate attributes, get, set, remove
const p = document.querySelector("#paragraph");
p.setAttribute("id", "updated-paragraph");
p.setAttribute("name", "username");
const name = p.getAttribute("name", "username");
console.log(name);
p.removeAttribute("name");
p.setAttribute("title", "This a title added with JS");

// Change google link (a) so it open google site in a new tab (href + _blank)
const link = document.querySelector("#google-link");
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");

// Remove the class attribute from the paragraph element
p.removeAttribute("class");

// Create element
const link2 = document.createElement("a");
link2.innerText = "Link";
console.log(link2);
const content = document.querySelector("#content");
content.appendChild(link2);
// content.removeChild(link2);
link2.remove();

// insertBefore
const title = content.querySelector("#title");
const list = content.querySelector("#item-list");
content.insertBefore(link2, list);

/* 1. Add the folowing code to your html (with JS). 
   2. Add the first list
   3. Remove first list.
   4. Remove all lists

    <ul class="super-list">
        <li>
            Second:
            <ol>
                <li>Sub-second 1</li>
                <li>Sub-second 2</li>
            </ol>
        </li>   
        <li>Third</li>
    </ul>
*/

// Events

const btn = document.querySelector("#add-item-button");
const btnSend = document.querySelector("#send-btn");

let counter = 0;
btn.onclick = () => {
  counter++;
  const li = document.createElement("li");
  li.innerText = `Element ${counter}`;
  list.appendChild(li);
};

btnSend.onclick = () => {
  const input = document.querySelector("input");
  const name = input.value;
  alert(`Hola ${name}`);
};

const input = document.querySelector("input");

input.onkeyup = (event) => {
  console.log(event.target.value);
};
