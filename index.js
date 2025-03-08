//let intervalId=setInterval(()=>{
//  console.log("Loading..." )
//},1000)
//setTimeout(()=>{
//  clearInterval(intervalId);
//  console.log("Loaded successfully!")
//},5000)

let intervalId = setInterval(() => {
    console.log("Loading...");
}, 1000);

setTimeout(() => {
    clearInterval(intervalId); // Stop the interval
    console.log("Loaded successfully!"); // Log the success message
}, 5000);