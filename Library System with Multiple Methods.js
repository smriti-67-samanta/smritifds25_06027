const library=["The Da Vinci Code","Gone Girl","Life of Pi"]

function addBook(title){
  library.push(title)
  console.log(`Book Add: ${title}`)
}

function searchBook(title){
  if(library.includes(title)){
    console.log(`Book Found: ${title}`)
  }
  else{
    console.log(`Book Not Found: ${title}`)
  }
}

function sortBook(){
  library.sort((a,b)=>a.localeCompare(b))
  console.log("Sorted Book",library);
  
}
function joinBook(){
  console.log("Joined Books:",library.join(","))
}
addBook("1984");
addBook("Pride and Prejudice");
addBook("War and Peace")
addBook("Crime and Punishment")
addBook("Harry Potter and the Sorcerer's Stone")

//console.log(library)

searchBook("1984"); 
searchBook("The Book Thief"); 

sortBook();
joinBook();