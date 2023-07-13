//NODE JS TEMPLETE CODE  for taking input from input1.txt file
let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function capitalizeName(name) {
    let modifiedName = name[0].toUpperCase() + name.slice(1);
    return modifiedName;
  }
  
  // Example usage
  let userName = readLine();
  let capitalizedName = capitalizeName(userName);
  console.log("Modified name:", capitalizedName);
  