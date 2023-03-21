 class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(bookCount, books) {
        this.bookCount = bookCount;
        this.books = books;
    }
    markRead(checkbox, id) {
        for (let book = 0; book <= library.books; book++) {
            if (book.id == checkbox.id) {
                console.log(checkbox.id) // check for remaining todo's and possible renaming of parameters
            }
        }
    }
    addBook() {
        // dom manipulation
        const newbook = new Book() // parameters will come from dom manipulation



        this.bookCount++
    }
}

const library = new Library(1, [{id:1, title:"Of Mice and Men", author:"John Steinback", read:true}]);