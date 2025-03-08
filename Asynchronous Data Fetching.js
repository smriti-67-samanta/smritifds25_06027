let fetchData=async(()=>{
    return new Promise((res,rej)=>{
        console.log("Data is loading");
        let isSuccess=Math.random()>= 0.5;
        setTimeout(()=>{
            if(isSuccess){
                console.log("Fetched data successfully!")
            }
            else{
                console.log("Error fetching data")
            }
        },2000)
    })
})
let loadData=aync(()=>{
    try{
        let data =await fetchData();
        console.log(data);
    }
    catch(error{
        console.log(error);
    })
})
loadData();