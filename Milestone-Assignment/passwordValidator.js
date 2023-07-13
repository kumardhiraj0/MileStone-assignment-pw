let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let password = readLine();
let confirmPassword = readLine();
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful");
    }
  }
  
  // Example usage

  validatePassword(password, confirmPassword);
  