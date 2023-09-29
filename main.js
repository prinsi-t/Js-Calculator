let inputs = document.getElementById("input");
let btn = document.getElementById("number");

let str = "";
let ope = "";
console.log(inputs.value);

const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const operatorBtn = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll("button");


Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML === "=") {
      str = eval(str);
      input.value = str;
    } else if (event.target.innerHTML == "AC") {
      str = "";
      document.querySelector("input").value = str;
    } else if (event.target.innerHTML == "DEL") {
      str = str.slice(0, -1);
      document.querySelector("input").value = str;
    }
  });
});

document.querySelectorAll(".number").forEach((number) => {
  number.addEventListener("click", (event) => {
    str += event.target.innerHTML;
    //console.log(event.target.value)
    document.querySelector("input").value = str;
  });
});

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (event) => {
    str += event.target.innerHTML;
    //console.log(event.target.value)
    document.querySelector("input").value = str;
  });
});

/* 
del.addEventListener('click', function (event) {
  if (event.target.innerHTML == 'DEL') {
    str = str.slice(0, -1)
    document.querySelector('input').value = str;
  }
}) */
/* 
clear.addEventListener('click', function (event) {
  if (event.target.innerHTML == 'AC') {
    str = '';
    document.querySelector('input').value = str;
  }
}) */

// blah blah blah blah bluubuu
