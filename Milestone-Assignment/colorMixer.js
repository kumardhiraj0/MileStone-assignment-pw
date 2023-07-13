// If color1 is "red" and color2 is "blue" or vice versa, print "purple"
// If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
// If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
// If any other combination of colors is input, the program should print "Invalid color combination"
//NODE JS TEMPLETE CODE 
let fs = require("fs");
let data = fs.readFileSync("./input1.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function colorMixer(color1, color2) {
    let resultingColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            resultingColor = "orange";
            break;
          case "blue":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      default:
        resultingColor = "Invalid color combination";
        break;
    }
  
    return resultingColor;
  }
  
  // Example usage
  let color1 = readLine();
  let color2 = readLine();
  
  console.log("resulting color :",colorMixer(color1, color2));
  