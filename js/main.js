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


function operate(op, a, b) {
  switch(op) {
      case '+':
          return add(a, b);
      break;
      case '-':
          return subtract(a, b);
      break;
      case 'x':
          return multiply(a, b);
      break;
      return divide(a, b);
      case '÷':
      default:
  }
}
