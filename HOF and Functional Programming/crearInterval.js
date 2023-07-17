let counter = 0;

function incrementCounter() {
  counter++;
  console.log(`Counter: ${counter}`);
  
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("Interval cleared.");
  }
}

// Set an interval to run incrementCounter() every 1 second (1000 milliseconds)
const intervalId = setInterval(incrementCounter, 1000);
