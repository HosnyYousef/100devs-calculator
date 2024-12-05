



// if we click on a number
  // we store it in a variable

let display = 0
let totalBucket = 0
let num1 = 0
let num2 = 0


//When we press the operator, 
  // it stores current number in total
  // and places a selected operator infront of it
  // then 
//press the equal sign, 



// then we click on operator
  //that will reset and bring us back to 0
// then we input second number
  // that's stored in a value
// then we hit equal
  // that should apply num1 and num2 with the operator









// if we click on a number
  // we store it in a variable
// then we click on operator
  //that will reset and bring us back to 0
// then we input second number
  // that's stored in a value
// then we hit equal
  // that should apply num1 and num2 with the operator






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

// total
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


//=========================


// document.querySelector('#resetTo0').addEventListener('click', runReset)

// let total = 1
// function runReset () {
//     total = 0
//     document.querySelector('#resetTo0')
//     document.querySelector('#display').value = total = 0
// }



// document.querySelector('#resetTo0').addEventListener('click', runReset)

// let total = 1
// function runReset () {
//     total = 0
//     document.querySelector('#resetTo0')
//     document.querySelector('#display').value = total = 0
// }


// function calculator (num1, num2, logicalOp) {
//   let total = 0;

//   try {

//     switch(logicalOp) {
//       case '+':
//         total = num1 + num2
//         break;

//       case '*':
//         total = num1 * num2
//         break;

//       case '-':
//         total = num1 - num2
//         break;

//      case '/': 
//         if (b === 0) {
//           throw "Can't divide by 0!"
//         } else {
//           total = num1 / num2
//         }
//         break;
//     }
//   }
//   catch(e) {
//     console.log("There's an error: ", e)
//   }

//   return total;
// }
// console.log(calculator(2,2,'*'));




// BUTTONS
// let num1 = 0
// let num2 = 0
// let total = 0

// document.querySelector('#number1').addEventListener('click', num1)

// function num1 () {
//   total = `${num1}`
//   document.querySelector('#placeToPutResult').innerText = total
// }

// orginal calculator
// let total = 0

// document.querySelector('#number0').addEventListener('click', number0)
// document.querySelector('#number1').addEventListener('click', number1)
// document.querySelector('#number2').addEventListener('click', number2)
// document.querySelector('#number3').addEventListener('click', number3)

// document.querySelector('#number4').addEventListener('click', number4)
// document.querySelector('#number5').addEventListener('click', number5)
// document.querySelector('#number6').addEventListener('click', number6)

// document.querySelector('#number7').addEventListener('click', number7)
// document.querySelector('#number8').addEventListener('click', number8)
// document.querySelector('#number9').addEventListener('click', number9)


// function number0() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number1() {
//   total = 1
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number2() {
//   total = 2
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number3() {
//   total = 3
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function number4() {
//   total = 4
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number5() {
//   total = 5
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number6() {
//   total = 6
//   document.querySelector('#placeToPutResult').innerHTML = total
// }


// function number7() {
//   total = 7
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number8() {
//   total = 8
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function number9() {
//   total = 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// //==================================


// // logical operators:


// document.querySelector('#numberDivide').addEventListener('mouseenter', numberDivide)
// document.querySelector('#numberMultiply').addEventListener('click', numberMultiply)
// document.querySelector('#numberAdd').addEventListener('click', numberAdd)
// document.querySelector('#numberSub').addEventListener('click', numberSub)

// function numberDivide() {
//   calculator (num1, num2, logicalOp)
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function numberMultiply() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function numberAdd() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function numberSub() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }


// return typeOf num1 === 'number' ? num1 : 0
// return typeOf num2 === 'number' ? num2 : 0

// we need to assign num1 a number 
  // by a button press on a number
// we need to assign logicalOp a logical operator
  // by button press on them
// we need to assign num2 a number
  // by a button press on a number


// we need to assign num1 a number 
  // by a button press on a number
// we need to assign logicalOp a logical operator
  // by button press on them
// we need to assign num2 a number
  // by a button press on a number

// // Define a function to multiply two numbers and display the result
// function multiplyBy() {
//   // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
//   num1 = document.getElementById("firstNumber").value;
//   num2 = document.getElementById("secondNumber").value;

//   // Set the inner HTML of the element with the id "result" to the product of the two numbers
//   document.getElementById("result").innerHTML = num1 * num2;
// }

// // Define a function to divide two numbers and display the result
// function divideBy() {
//   // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
//   num1 = document.getElementById("firstNumber").value;
//   num2 = document.getElementById("secondNumber").value;

//   // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
//   document.getElementById("result").innerHTML = num1 / num2;
// } 


// //reset
// document.querySelector('#resetButton').addEventListener('mouseenter', makeZero)

// //numbers
// document.querySelector('#number1').addEventListener('click', num1)
// document.querySelector('#number2').addEventListener('click', num2)

// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// //Logical Operators


// document.querySelector('#numberAdd').addEventListener('click', addition)

// document.querySelector('#equals').addEventListener('click', equals)

// //ACTIONS/FUNCTIONS
// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function num1() {
//   total = 1
//   document.querySelector('#placeToPutResult').innerText = total
// }
// function num2() {
//   total = 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function equals() {
//   total =  + total
//   document.querySelector('#placeToPutResult').value = total
// }
// function addition() {
//   total = num1 + num2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }