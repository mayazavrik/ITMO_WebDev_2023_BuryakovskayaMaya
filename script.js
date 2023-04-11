
let x = "";
let y = "";
let sign = "";
let finish = false;

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const action = ["+", "-", "X", "/"];
const buttons = document.querySelector(".calc");
const output = document.querySelector(".calc_result");
function clearAll() {
  x = "";
  y = "";
  sign = "";
  finish = false;
  output.innerText = '';
}

function buttonClick(event) {

  if (!event.target.classList.contains("calc_btn")) return;
  if (event.target.classList.contains("calc_btn--reset")) return;
  output.innerText = "";
  const data = event.target.innerText;

  if (number.includes(data)) {
    if (y === "" && sign === "") {
      x += data;
      console.log(x, y, sign);
      output.innerText = x;
    } else if (x !== "" && y !== "" && finish) {
      y = data;
      finish = false;
      output.innerText = y;
    } else {
      y += data;
      output.innerText = y;
    }
    console.log(x, y, sign);
    return;
  }

  if (action.includes(data)) {
    sign = data;
    output.text = sign;
    console.table("x, y, sign");
    return;
  }
  if (action.includes(data)) {
    sign = data;
    output.innerText = sign;
    console.table("x, y, sign");
    return;
  }

  if (data === "=") {
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
          output.innerText = "error";
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

    finish = true;
    output.innerText = x;
    console.table(x, y, sign);
  }
}
document.querySelector(".calc_btn--reset").onclick = clearAll;
document.querySelector(".calc").onclick = buttonClick;
