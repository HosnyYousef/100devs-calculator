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
let num1 = 0
let num2 = 0
let total = 0

// document.querySelector('#number1').addEventListener('click', num1)

// function num1 () {
//   total = `${num1}`
//   document.querySelector('#placeToPutResult').innerText = total
// }

//============num1=================

document.querySelector('#number0').addEventListener('click', number0)
document.querySelector('#number1').addEventListener('click', number1)
document.querySelector('#number2').addEventListener('click', number2)
document.querySelector('#number3').addEventListener('click', number3)

document.querySelector('#number4').addEventListener('click', number4)
document.querySelector('#number5').addEventListener('click', number5)
document.querySelector('#number6').addEventListener('click', number6)

document.querySelector('#number7').addEventListener('click', number7)
document.querySelector('#number8').addEventListener('click', number8)
document.querySelector('#number9').addEventListener('click', number9)


function number0() {
  num1 = 0
  document.querySelector('#placeToPutResult').innerText = num1
}

function number1() {
  num1 = 1
  document.querySelector('#placeToPutResult').innerText = num1
}

function number2() {
  num1 = 2
  document.querySelector('#placeToPutResult').innerText = num1
}

function number3() {
  num1 = 3
  document.querySelector('#placeToPutResult').innerHTML = num1
}

function number4() {
  num1 = 4
  document.querySelector('#placeToPutResult').innerText = num1
}

function number5() {
  num1 = 5
  document.querySelector('#placeToPutResult').innerText = num1
}

function number6() {
  num1 = 6
  document.querySelector('#placeToPutResult').innerHTML = num1
}


function number7() {
  num1 = 7
  document.querySelector('#placeToPutResult').innerText = num1
}

function number8() {
  num1 = 8
  document.querySelector('#placeToPutResult').innerText = num1
}

function number9() {
  num1 = 9
  document.querySelector('#placeToPutResult').innerHTML = num1
}

//==================================

document.querySelector('#resetTo0').addEventListener('click', resetTo0)

function resetTo0() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

//============num2=================

document.querySelector('#number0').addEventListener('click', number0)
document.querySelector('#number1').addEventListener('click', number1)
document.querySelector('#number2').addEventListener('click', number2)
document.querySelector('#number3').addEventListener('click', number3)

document.querySelector('#number4').addEventListener('click', number4)
document.querySelector('#number5').addEventListener('click', number5)
document.querySelector('#number6').addEventListener('click', number6)

document.querySelector('#number7').addEventListener('click', number7)
document.querySelector('#number8').addEventListener('click', number8)
document.querySelector('#number9').addEventListener('click', number9)


function number0() {
  num2 = 0
  document.querySelector('#placeToPutResult').innerText = num2
}

function number1() {
  num2 = 1
  document.querySelector('#placeToPutResult').innerText = num2
}

function number2() {
  num2 = 2
  document.querySelector('#placeToPutResult').innerText = num2
}

function number3() {
  num1 = 3
  document.querySelector('#placeToPutResult').innerHTML = num1
}

function number4() {
  num2 = 4
  document.querySelector('#placeToPutResult').innerText = num2
}

function number5() {
  num2 = 5
  document.querySelector('#placeToPutResult').innerText = num2
}

function number6() {
  num2 = 6
  document.querySelector('#placeToPutResult').innerHTML = num2
}


function number7() {
  num2 = 7
  document.querySelector('#placeToPutResult').innerText = num2
}

function number8() {
  num2 = 8
  document.querySelector('#placeToPutResult').innerText = num2
}

function number9() {
  num2 = 9
  document.querySelector('#placeToPutResult').innerHTML = num2
}

//==================================

// logical operators:


document.querySelector('#numberDivide').addEventListener('click', numberDivide)
document.querySelector('#numberMultiply').addEventListener('click', numberMultiply)
document.querySelector('#numberAdd').addEventListener('click', numberAdd)
document.querySelector('#numberSub').addEventListener('click', numberSub)

function numberDivide() {
  calculator (num1, num2, logicalOp)
  document.querySelector('#placeToPutResult').innerText = total
}

function numberMultiply() {
  total = num1 * num2
  document.querySelector('#placeToPutResult').innerText = total
}

function numberAdd() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function numberSub() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}


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
