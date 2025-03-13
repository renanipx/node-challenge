// Execute after a delay
setTimeout(() => {
    console.log("Executed after 3 seconds");
  }, 3000);
  
  // Execute repeatedly every 2 seconds
  const intervalId = setInterval(() => {
    console.log("This message repeats every 2 seconds");
  }, 2000);
  
  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval has been stopped.");
  }, 10000);
  
  // Cancel timeout before it runs
  const timeoutId = setTimeout(() => {
    console.log("This will not be printed");
  }, 5000);
  clearTimeout(timeoutId);
  