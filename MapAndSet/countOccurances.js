// 01. Count the occurrences.

// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.


function WordsCount(string) {
    const words = string.split(" ");
    const map = new Map();
  
    for (let i = 0 ; i<words.length;i++) {
      if (map.has(words[i])) {
        map.set(words[i], map.get(words[i]) + 1);
      } else {
        map.set(words[i], 1);
      }
    }
  
    return map;
  }
  
  const string = "i am dhiraj kumar and i am from bhopal bhopal madhyapardesh";
  console.log(WordsCount(string));
