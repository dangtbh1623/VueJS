const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function add(){
    const task = inputEl.value;
    const neuLI = document.createElement("li");
    neuLI.textContent = task;
    listEl.appendChild(neuLI);
    inputEl.value = "";
}

buttonEl.addEventListener("click", add);
