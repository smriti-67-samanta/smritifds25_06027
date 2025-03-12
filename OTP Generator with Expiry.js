function createOTP(){
    let bag=""
    function generateOTP(){
      OTP=Math.floor(Math.random()*900000)+100000
      console.log(`Your OTP is: ${bag}`)
      }
      function getOTP(){
        
        if(OTP){
          let nOTP=bag
          bag=""
          console.log(nOTP)
        }
        else{
          console.log("OTP expired")
        }
      }
    return{
      generateOTP,
      getOTP
    };
    
  }
  let otpSystem =createOTP()
  //myOTP.generateOTP()
  //const otpSystem = createOTPSystem();  
  otpSystem.generateOTP(); // "Your OTP is: 482193"  
  otpSystem.getOTP();      // "482193"  
  otpSystem.getOTP();      // "OTP expired"  
  otpSystem.generateOTP(); // "Your OTP is: 739182"  
  otpSystem.getOTP();      // "739182"  
  otpSystem.getOTP();      // "OTP expired"  
  
  
