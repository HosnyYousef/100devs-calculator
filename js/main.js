document.addEventListener("DOMContentLoaded", function() {
    let currentInput = "";
    let previousInput = "";
    let operation = null;
    const display = document.querySelector(".display");
    document.querySelector(".buttons").addEventListener("click", function(e) {
        const btnValue = e.target.innerText;
        if (!isNaN(btnValue) || btnValue === ".") {
            currentInput += btnValue;
            display.innerText = currentInput;
        } else if (["+", "-", "*", "/"].includes(btnValue)) {
            if (previousInput !== "") {
                currentInput = operate(previousInput, currentInput, operation);
                display.innerText = currentInput;
                previousInput = currentInput;
                currentInput = "";
            } else {
                previousInput = currentInput;
                currentInput = "";
            }
            operation = btnValue;
        } else if (btnValue === "=") {
            if (previousInput) {
                currentInput = operate(previousInput, currentInput, operation);
                display.innerText = currentInput;
                previousInput = "";
                operation = null;
            }
        }
    });
    function operate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case "+":
                return (a + b).toString();
            case "-":
                return (a - b).toString();
            case "*":
                return (a * b).toString();
            case "/":
                if (b !== 0) {
                    return (a / b).toString();
                } else {
                    alert("Cannot divide by zero!");
                    clearAll();
                    return "";
                }
            default:
                return b.toString();
        }
    }
    function clearAll() {
        currentInput = "";
        previousInput = "";
        operation = null;
        display.innerText = "0";
    }
});


// let total = 0;
//     let currentOperation = null;
//     let firstOperand = null;

//     document.querySelectorAll('.gray').forEach(button => {
//         button.addEventListener('click', function() {
//             const display = document.querySelector('.display');
//             if (display.innerText === '0') {
//                 display.innerText = this.getAttribute('data-value');
//             } else {
//                 display.innerText += this.getAttribute('data-value');
//             }
//         });
//     });

//     document.querySelector('[data-operation="plus"]').addEventListener('click', function() {
//         firstOperand = parseFloat(document.querySelector('.display').innerText);
//         currentOperation = 'plus';
//         document.querySelector('.display').innerText = '0';
//     });

//     document.querySelector('[data-operation="equals"]').addEventListener('click', function() {
//         if (currentOperation === 'plus') {
//             const secondOperand = parseFloat(document.querySelector('.display').innerText);
//             document.querySelector('.display').innerText = firstOperand + secondOperand;
//         }
//         // Reset
//         firstOperand = null;
//         currentOperation = null;
//     });



// =====================================
// =====================================



// //light up buttons when clicked


// //Eventlistner when we hear a click, we place number in value
// //we add the numbers together
// //

// let total = 0

// document.querySelector('7').onclick = seven
// document.querySelector('8').onclick = eight
// document.querySelector('9').onclick = nine
// document.querySelector('/').onclick = divide
// document.querySelector('4').onclick = four
// document.querySelector('5').onclick = five
// document.querySelector('6').onclick = six
// document.querySelector('*').onclick = multiply
// document.querySelector('1').onclick = one
// document.querySelector('2').onclick = two
// document.querySelector('3').onclick = three
// document.querySelector('-').onclick = minus
// document.querySelector('0').onclick = zero
// document.querySelector('.').onclick = decimal
// document.querySelector('=').onclick = equalSign
// document.querySelector('+').onclick = plus

// function seven () {
//     document.querySelector('7').innerText = .display
// }

// function plus () {
//     document.querySelector('.display').innerText = +
// }


// =====================================
// =====================================


// // Get all buttons
// const buttons = document.querySelectorAll('.calculator button');

// buttons.forEach(button => {
//     button.addEventListener('click', clickableButtons)
    
//     function clickableButtons () {
//         const value = this.textContent; // Get the text inside the button

//         if (['+', '-', '*', '/'].includes(value)) {
//             // Handle operation
//             setOperation(value);
//         } else if (value === '=') {
//             // Handle equals
//             calculate();
//         } else {
//             // Handle number or decimal
//             updateDisplay(value);
//         }
//     };
// });

// function setOperation(operation) {
//     // Your logic for setting the operation
// }

// function calculate() {
//     // Your logic for performing the calculation
// }

// function updateDisplay(value) {
//     // Your logic for updating the display with the clicked number or decimal
// }

