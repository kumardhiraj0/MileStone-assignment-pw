function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    let intervalId;
  
    // Function to generate a random number between min and max (inclusive)
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Function to update the progress message
    function updateProgressMessage() {
      if (remainingTime > 0) {
        console.log(`Generating random number in ${remainingTime} seconds...`);
        remainingTime--;
      } else {
        clearInterval(intervalId);
        const randomNumber = getRandomNumber(1, 100); // Change the range as needed
        console.log("Generated random number:", randomNumber);
      }
    }
  
    // Start the progress messages
    intervalId = setInterval(updateProgressMessage, 1000);
  
    // Generate the random number after the specified delay
    setTimeout(() => {
      clearInterval(intervalId);
      const randomNumber = getRandomNumber(1, 100); // Change the range as needed
      console.log("Generated random number:", randomNumber);
    }, delayInSeconds * 1000);
  }
  
  // Test the program with a delay of 5 seconds
  generateRandomNumberWithDelay(5);
  