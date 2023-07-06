import { Book } from './book.js'

export class Library {
    constructor() {
        books = []
    }
    addBook(bookInfo) {
        let bookInfo = bookInfo
        let book = new Book()

        book.title = bookInfo.description
        book.description = bookInfo.description
        book.author = bookInfo.author

        this.books.push(book)
    }
    getBooks() {
        return this.books
    }
    removeBookById(id) {
        this.books.splice(id, 1)
    }
    getBookById(id) {
        let book = this.books[id]
        // this.books.find(element => element.id == id)
        return book
    }
    updateBookById(id, info) {
        this.books.forEach(book => {
            if (book.id === id) {
                if (info.title) {
                    book.title = info.title
                }
                if (info.description) {
                    book.description = info.description
                }
                if (info.author) {
                    book.author = info.author
                }
            }
        })
    }
}