
//display 0
// [num1] [op] [num2]

// total = 0
// 

function Calculator (plus, subtract, multiply, divide) {
  total = 0
  let num1 = document.querySelector('')

  this.plus = plus
  this.subtract = subtract
  this.multiply = multiply
  this.divide = divide

  this.multiplication = function(){
    total += (num1 * num2)
    console.log('multiplyWorks')
  }
}

//total
// op
// stores first nubmer
// then 


// button equal(=), activates this:




function operate(op, numA, numB) {
  document.querySelector('.button').addEventListener('click', )
  switch(op) {
      case '+':
          return parseInt(numA) + parseInt(numB)
      case '-':
          return parseInt(numA) - parseInt(numB)
      case 'x':
          return parseInt(numA) * parseInt(numB)
      case '÷':
          return parseInt(numA) / parseInt(numB)
      default:
  }
}


//=======

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let secondNumber = "";
let operator = "";

/* /// this part is going to be implemented later ///

const summButton = document.getElementById("+");

function summ(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function substr(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}
*/

// if we click on a number
  // we store it in a variable
// then we click on operator
  //that will reset and bring us back to 0
// then we input second number
  // that's stored in a value
// then we hit equal
  // that should apply num1 and num2 with the operator


numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", function (event) {
    if (operator === "") {
      firstNumber += event.target.innerText;
      display.textContent = firstNumber;
    } else {
      secondNumber += event.target.innerText;

      display.textContent = secondNumber;
      console.log(secondNumber);
    }
  });
});

const inputNumber = (number) => {
  const screenNumber = display.textContent;
  if (screenNumber.length < 16)
    display.textContent = parseInt(screenNumber + number).toString();
};

const inputOperator = (operator) => {
  const screenOperator = display.textContent;
  if (screenOperator.length < 16)
    display.textContent = screenOperator + operator;
};

operators.forEach((opBtn) => {
  opBtn.addEventListener("click", function (event) {
    if (event.target.innerText !== "=") {
      operator = event.target.innerText;

      console.log(firstNumber); 
      console.log(operator); 
    } else {
      
      switch (
        operator 
      ) {
        case "+":
          console.log(parseInt(firstNumber) + parseInt(secondNumber));  
          break;

        case "-":
          console.log(parseInt(firstNumber) - parseInt(secondNumber));
          break;

        case "*":
          console.log(parseInt(firstNumber) * parseInt(secondNumber));
          break;

        case "/":
          console.log(parseInt(firstNumber) / parseInt(secondNumber));
          break;

        default:
          break;
      }
    }
  });
});
