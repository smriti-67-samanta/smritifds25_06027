function Book(title, author){
    let obj={}
    obj.title=title
    obj.author=author
    obj.details= function(){
         console.log(`Title: ${this.title}, Author: ${this.author}`)

    }
    return obj;

}

function createLibrary(){
    let books=[]
    return{
        addBook(book){
            books.push(book)
           //console.log(`Added book: ${book.title}`)
        }
    }

}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");
book1.details()
//console.log(book1)
//console.log(book2)

library.addBook(book1);
library.addBook(book2);

//library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

//library.removeBook("1984");
//library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

