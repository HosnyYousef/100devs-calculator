

// Function that displays value
function dis(val) {
  document.getElementById('result').value += val
}

//The keys() method returns an Iterator object with the keys of an array.
// The keys() method does not change the original array.

// Function that display value 
function dis(val) {
  document.getElementById("result").value += val
}

function myFunction(event) {
  if (event.key == '0' || event.key == '1' ||
    event.key == '2' || event.key == '3' ||
    event.key == '4' || event.key == '5' ||
    event.key == '6' || event.key == '7' ||
    event.key == '8' || event.key == '9' ||
    event.key == '+' || event.key == '-' ||
    event.key == '*' || event.key == '/')
    document.getElementById('result').value += event.key;
}

var cal = document.getElementById("calcu");
cal.addEventListener = function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    let x = document.getElementById("result").value
    console.log(x);
    solve();
  }
}

// Function that evaluates the digit and return result

// explain this:
// main.js
function solve() {
  try {
    // Evaluate the expression entered in the result input
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    alert("Invalid Expression");  // Display error if expression is incorrect
  }
}


// Funtion that clear the display
function clr() {
  document.getElementById("result").value = ""
}



// if we click on a number
// we store it in a variable
// then we click on operator
//that will reset and bring us back to 0
// then we input second number
// that's stored in a value
// then we hit equal
// that should apply num1 and num2 with the operator



//reference:
// https://www.geeksforgeeks.org/javascript-calculator/