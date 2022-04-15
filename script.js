const userInput = document.getElementById("user-input");

let expression = "";

function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
  userInput.value = eval(expression);
  // userInput.value = Function("return " + expression)(); // solves the expression
  expression = "";
}

function erase() {
  expression = "";
  userInput.value = expression;
}
