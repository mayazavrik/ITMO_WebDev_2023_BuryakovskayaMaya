let x = "";
let y = "";
let sign = "";
let operationIsFinished = false;

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const action = ["+", "-", "X", "/"];
const buttons = document.querySelector(".calc");
const output = document.querySelector(".calc_result");
function setCalcResult(result) {
  output.innerText = result;
}
function clearAll() {
  x = ""; 
  y = "";
  sign = "";
  operationIsFinished = false;
  output.innerText = '';
}

function onButtonClick(event) {

  const noButtonIsClicked = !event.target.classList.contains("calc_btn");
  const resetButtonIsClicked = event.target.classList.contains("calc_btn--reset");

  if (noButtonIsClicked || resetButtonIsClicked) {
    return;
  }
  

  setCalcResult("");
  const buttonSymbol = event.target.innerText;

  if  (numbersArray.includes(buttonSymbol)) {
    if (y === "" && sign === "") {
      x += buttonSymbol;
      console.log(x, y, sign);
      setCalcResult(x);
    } else if (x !== "" && y !== "" && operationIsFinished) {
      y = buttonSymbol;
      operationIsFinished = false;
      setCalcResult(y);
    } else {
      y += buttonSymbol;
      setCalcResult(y);
    }
    console.log(x, y, sign);
    return;
  }

  if (action.includes(buttonSymbol)) {
    sign = buttonSymbol;
    setCalcResult(sign);
    console.table("x, y, sign");
    return;
  }
  if (action.includes(buttonSymbol)) {
    sign = buttonSymbol;
    setCalcResult(sign);
    console.table("x, y, sign");
    return;
  }

  if (buttonSymbol === "=") {
    switch (sign) {
      case "+":
        x = +x + +y;
        break;
      case "-":
        x = x - y;
        break;
      case "X":
        x = x * y;
        break;
      case "/":
        if (y === "0") {
          setCalcResult("error");
          x = "";
          y = "";
          sign = "";
          return;
        }
        x = x / y;
        break;
        
        default:
          return;
    }

    operationIsFinished = true;
    output.innerText = x;
    console.table(x, y, sign);
  }
}
document.querySelector(".calc_btn--reset").onclick = clearAll;
document.querySelector(".calc").onclick = onButtonClick;
