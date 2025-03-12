class BankAccount {
    constructor(initialBalance){
      this.balance=initialBalance;
    }
    deposit(amount){
      if(amount<0){
        console.log("deposit a positive amount")
        
      }
      else{
        this.balance+=amount;
        console.log(`Deposited: ${amount}, New balance: ${this.balance}`)
      
      }
    }
    withdraw(amount){
      if(this.balance<amount){
        console.log("Insufficient funds")
        
      }
      else{
        this.balance-=amount;
        console.log(`withdrew: ${amount},New Balance: ${this.balance}`)
        
      }
    }
    
    getBalance(){
      console.log(`Balance is:, ${this.balance}`)
      
    }
  }
  const myAccount = new BankAccount(1000);  
  myAccount.deposit(500);   // "Deposited ₹500. New balance: ₹1500"  
  myAccount.withdraw(200);  // "Withdrew ₹200. New balance: ₹1300"  
  myAccount.withdraw(1500); // "Insufficient funds"  
  myAccount.getBalance();   // "Current balance: ₹1300"  