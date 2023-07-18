// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.


function uniqueNumbers(arr) {
  return new Set(arr);
}

console.log(uniqueNumbers([1, 2, 2, 3, 3, 4]));
console.log(uniqueNumbers([5, 6, 7, 7, 8, 8]));
//   output
//     Set(4) { 1, 2, 3, 4 }
//     Set(4) { 5, 6, 7, 8 }
