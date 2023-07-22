function convertToNumber(str) {
  try {
    const number = Number(str);
    if (Number.isNaN(number)) {
      throw new Error("Invalid number");
    }
    return number;
  } catch (error) {
    return error.message;
  }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("hello"));
