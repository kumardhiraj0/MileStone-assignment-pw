//NODE JS TEMPLETE CODE for taking input from input1.txt
let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
} 

function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
    }
    return result;

  }
  
  // Example usage
  let num1 = parseFloat(readLine());
  let num2 = parseFloat(readLine());
  let operator = readLine();
  
  console.log(calculator(num1, num2, operator));
  