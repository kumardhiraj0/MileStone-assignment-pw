//NODE JS TEMPLETE CODE for taking input from input1.txt
let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
} 
function printInvertedRightTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      for (let col = 1; col <= row; col++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  //taking input and calling fn
  let input = parseInt(readLine());
  printInvertedRightTriangle(input);
  