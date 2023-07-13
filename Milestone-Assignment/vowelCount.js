let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
} 

function countVowels(name) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u',"A","E","I","O","U"];
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage
  let userName = readLine();
  let numVowels = countVowels(userName);
  console.log("Number of vowels in the name:", numVowels);
  