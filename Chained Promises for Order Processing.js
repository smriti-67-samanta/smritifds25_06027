function placeOrder(){
    return new Promise((res,rej)=>{
      let orderId=Math.floor(Math.random()*90)+10
      console.log("Order Id:",orderId)
      res(orderId)
    })
  }
  function processOrder(orderId){
    return new Promise((res,rej)=>{
      let processingCode=Math.floor(Math.random()*90)+10
      console.log("Processing Code:",processingCode)
      res(processingCode)
    })
  }
  function confirmOrder(processingCode){
    return new Promise((res,rej)=>{
      let confirmationCode=Math.floor(Math.random()*90)+10
      console.log("Confirmation Number:",confirmationCode)
      res(confirmationCode)
    })
  }
  function calculateFinalResult(confirmationCode){
    return new Promise((res,rej)=>{
      let extraNumber=Math.floor(Math.random()*90)+10
      console.log("Extra Number:",extraNumber)
      let finalResult=extraNumber+confirmationCode
      console.log("Final Result:",finalResult)
    })
  }
  placeOrder()
  .then((orderId)=> processOrder(orderId))
  .then((processingCode)=>confirmOrder(processingCode)) 
  .then((confirmationCode)=>calculateFinalResult(confirmationCode))
  .then((calculateFinalResult)=>console.log(`Final Result: ${finalResult}`))
  .catch((error)=>console.log(`Error: ${error}`))