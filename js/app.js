class Calculator {
  constructor() {
    this.num1Element = document.querySelector('#num1');
    this.num2Element = document.querySelector('#num2');
    this.operationElement = document.querySelector('#operation');
    this.calculateBtn = document.querySelector('#calculateBtn');
    this.resultElement = document.querySelector('#result');

    
    this.calculateBtn.addEventListener('click', () => this.compute());
  }

 add(num1,num2) {
  return num1 + num2;
 }
 subtract(num1,num2){
  return num1 - num2;
 }
 multiply(num1,num2){
  return num1 * num2;
 }
 divide() {
  if (num2 === 0) {
    return 'Error: Division by zero';
  }
  return num1 / num2;
  }

  compute() {
    const num1 = parseFloat(this.num1Element.value);
    const num2 = parseFloat(this.num2Element.value);
    const operation = this.operationElement.value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Please enter valid numbers!';
    } else {
      switch (operation) {
        case 'add':
          result = this.add(num1, num2);
          break;
        case 'subtract':
          result = this.subtract(num1, num2);
          break;
        case 'multiply':
          result = this.multiply(num1, num2);
          break;
        case 'divide':
          result = this.divide(num1, num2);
          break;
        default:
          result = 'Invalid operation';
      }
    }
    this.resultElement.textContent = result;
  }
}



document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});


