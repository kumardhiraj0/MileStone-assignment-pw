function findHighestMarks(marks) {
  let highestMarks = marks[0];

  for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
  }

  return highestMarks;
}

// Example usage
let marks = [85, 92, 78, 95, 88];
let highestMarks = findHighestMarks(marks);
console.log("Highest marks:", highestMarks);
