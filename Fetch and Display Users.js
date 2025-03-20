fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
//.then((res)=>console.log(res))
.then((res)=>{
    console.log(res)
    res.forEach((user)=>{
    console.log(user.name)
})
})

.catch((err)=>{
    console.log(err)
})