// function divide(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       return a / b;
//     } catch (error) {
//       console.error("Exception caught:", error.message);
//       // You can handle the exception here, log it, or take any other appropriate action.
//     } finally {
//       console.log("This will always be executed, whether there was an exception or not.");
//       // Perform cleanup operations or other tasks that should always be done.
//     }
//   }

//   // Example usage:
//   console.log(divide(10, 2)); // Output: 5
//   console.log(divide(10, 0)); // Output: "Exception caught: Division by zero is not allowed."
//   // Output: "This will always be executed, whether there was an exception or not."

// console.log("Hello from PW Skills");
// console.log("Congratulations !! You have enrolled to the course.");
// console.log("You have completed HTML & CSS. Hurray !!");
// try {
// console.log(webDevelopment);
// } catch (error) {
// console.log(error.message);
// console.log(error.name);
// }
// console.log("You are now learning Javascript");

//Full Stack Web Development
// console.log("Hello from PW Skills");

// console.log("Congratulations !! You have enrolled to the course.");

// console.log("You have completed HTML & CSS. Hurray !!");

// try {

// console.log(webDevelopment);

// } catch (error) {

// console.log(error.message);

// } finally {

// console.log("You can now create Static webpages");

// }

// console.log("You are now learning Javascript");

/*
OUTPUT:


Hello from PW Skills

Congratulations !! You have enrolled to the course.

You have completed HTML & CSS. Hurray !!

webDevelopment is not defined

You can now create Static webpages

You are now learning Javascript

*/
console.log("Hello from PW Skills");
console.log("Congratulations !! You have enrolled to the course.");
console.log("You have completed HTML & CSS. Hurray !!");
let assignmentCompletion = false;
try {
  if (assignmentCompletion === false)
    throw new Error("You have not completed the Assignment");//custom errors also we can create
} catch (error) {
  console.log(error.message);
} finally {
  console.log("You can now create Static webpages");
}

console.log("You are now learning Javascript");
