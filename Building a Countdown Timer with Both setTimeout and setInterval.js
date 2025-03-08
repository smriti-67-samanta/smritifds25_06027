let i = parseInt(prompt("Enter your time:")); 

  let intervalId = setInterval(() => {
    if (i > 0) {
      console.log("Time left:", i, "seconds");
      i--; // 
    } else {
      console.log("Countdown complete!");
      clearInterval(intervalId); 
    }
  }, 1000); 