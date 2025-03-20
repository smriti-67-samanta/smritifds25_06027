async function fetchData(){
    try{
      let res=await fetch("https://fakestoreapi.com/products")
      if (!res.ok) {
        throw new Error("an incorrect URL is used");
      }
      let data=await res.json()
      console.log("data from async/await",data)
      
      
      const totalPrice = data.reduce((sum, product) => sum + product.price, 0);
      console.log("Total Price of All The Products:", totalPrice);
    }
  
  catch(err){
    console.log("not submitted")
  }
  }
  fetchData()