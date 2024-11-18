const display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    const result = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
