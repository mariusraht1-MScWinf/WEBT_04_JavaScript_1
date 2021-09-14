document.querySelector("#operator").textContent = "+";
document.querySelector("#result").textContent = "N/A";

function getNumber() {
  let a = document.querySelector("#a").valueAsNumber;
  let b = document.querySelector("#b").valueAsNumber;
  return new Calculator(a, b);
}

function onClick_sum(event) {
  document.querySelector("#operator").textContent = "+";
  document.querySelector("#result").textContent = getNumber().add();
}

function onClick_sub(event) {
  document.querySelector("#operator").textContent = "-";
  document.querySelector("#result").textContent = getNumber().sub();
}

function onClick_mult(event) {
  document.querySelector("#operator").textContent = "*";
  document.querySelector("#result").textContent = getNumber().mult();
}

function onClick_div(event) {
  document.querySelector("#operator").textContent = "/";
  document.querySelector("#result").textContent = getNumber().div();
}

class Calculator {
  first;
  second;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  add() {
    return this.first + this.second;
  }

  sub() {
    return this.first - this.second;
  }

  mult() {
    return this.first * this.second;
  }

  div() {
    return this.first / this.second;
  }
}
