const input = document.getElementById("input");
const output = document.getElementById("output");
const sign = document.getElementById("sign");

const sum = document.getElementById("sumBtn");
const sub = document.getElementById("subBtn");
const muti = document.getElementById("mutiBtn");
const div = document.getElementById("divisionBtn");

const submit = document.getElementById("equalBtn");

let inputValue = [];
let tempValueOne = "";

let result = 0;
let operation = "";

sum.addEventListener("click", () => {
  operation = "+";
  operator();
  displayIO();
});

sub.addEventListener("click", () => {
  operation = "-";
  operator();
  displayIO();
});

muti.addEventListener("click", () => {
  operation = "*";
  operator();
  displayIO();
});

div.addEventListener("click", () => {
  operation = "/";
  operator();
  displayIO();
});

submit.addEventListener("click", () => {
  operator();
  operation = "";
  displayIO();
});

function enterNumber(val) {
  if (inputValue.length == 0 && val == 0) {
  } else {
    inputValue.push(val);
    displayIO();
  }
}

function operator() {
  if (inputValue.length == 0) {
    console.log("nothing to cal");
  } else {
    inputValue.forEach((r) => {
      tempValueOne += r;
    });
    tempValueOne = parseInt(tempValueOne);
    if (result == 0) {
      result = tempValueOne;
    } else {
      tempValueOne = parseInt(tempValueOne);

      switch (operation) {
        case "+": {
          result += tempValueOne;

          break;
        }
        case "-": {
          result -= tempValueOne;

          break;
        }
        case "*": {
          result *= tempValueOne;

          break;
        }
        case "/": {
          result /= tempValueOne;

          break;
        }
        default: {
          console.log(result);
          break;
        }
      }
    }
    inputValue = [];
    tempValueOne = "";

    displayIO();
  }
}

function clearAll() {
  inputValue = [];
  tempValueOne = "";

  result = 0;
  operation = "";
  displayIO();
}

function clearOneDigi() {}

function displayIO() {
  if (inputValue.length == 0) {
    input.innerText = inputValue;
    output.innerText = result;
    sign.innerText = operation;
  } else {
    input.innerText += inputValue[inputValue.length - 1];
    output.innerText = result;
    sign.innerText = operation;
  }
}
