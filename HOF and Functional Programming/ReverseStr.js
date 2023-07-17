//fn to reverse str
function reverseString(input) {
  let reversedString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
  return reversedString;
}

//main fn to reverse str after 2s delay
function reverseStringWithDelay(input) {
  setTimeout(() => {
    const reversedString = reverseString(input);
    console.log(reversedString);
  }, 2000);
}

const input = "Dhiraj kumar";
console.log("Original string:", input);
reverseStringWithDelay(input);
