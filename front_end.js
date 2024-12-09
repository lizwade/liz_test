


const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p")
para.style.color = "blue";
para.textContent = "Hi, I'm blue!";

const redH3 = document.createElement("h3");
redH3.style.color = "red";
redH3.textContent = "I'm a red h3";

const div = document.createElement("div");
div.setAttribute("style", "background-color: pink; border: 4px solid black;");
//div.style["border-color"] = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "me too!";
div.appendChild(p2);


container.appendChild(content);
container.appendChild(para);
container.appendChild(redH3);
container.appendChild(div);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");

/*
btn2.addEventListener("click", () => {
  alert("Hello World");
});
*/

btn2.addEventListener("click", alertFunction);


function alertFunction() {
    alert("This is cool");
}

btn2.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn2.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

const myButtons = document.querySelectorAll("button");

myButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });

