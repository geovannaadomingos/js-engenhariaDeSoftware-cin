// Classe book
class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author
  }
}

// Classe library

class Library {
  constructor() {
    this.books = []
  }
  addBook(bookInfo) {
    let info = bookInfo
    let book = new Book()

    book.title = info.description
    book.description = info.description
    book.author = info.author

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
    return book
  }
  updateBookById(id, info) {
    this.books.forEach((element, i) => {
      if (i === id) {
        if (info.title) {
          element.title = info.title
        }
        if (info.description) {
          element.description = info.description
        }
        if (info.author) {
          element.author = info.author
        }
      }
    })
  }
}

// Estrutura principal 

let library = new Library()


let book1 = library.addBook({
  title: 'Em busca de mim',
  description: 'Uma autobiografia de Viola Davis',
  author: 'Viola Davis'
})

let book2 = library.addBook({
  title: 'Depois a louca sou eu',
  description: 'Livro de crônicas',
  author: 'Tati Bernardi'
})

let book3 = library.addBook({
  title: 'Eu sou Malala',
  description: 'Uma autobiografia de Malala Yousafza',
  author: 'Malala Yousafza'
})

// Todos os livros antes de alterações
console.log(library.getBooks())

// Removendo um livro
library.removeBookById(0)

// Todos os livros após remoção de um livro
console.log(library.getBooks())

// Pegando um livro pelo id
console.log(library.getBookById(0))

// Alterando atributos de um livro pelo id
library.updateBookById(1, {
  title: 'Novo Título',
  description: 'Nova Descrição'
})

// Verificando o livro após alteração
console.log(library.getBookById(1))