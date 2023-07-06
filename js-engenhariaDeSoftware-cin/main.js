import { Library } from './library.js'

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

let allBooks = library.getBooks()
console.log(allBooks)


library.removeBookById(book1.id)


let foundBook = library.getBookById(book2.id)
console.log(foundBook)


library.updateBookById(book2.id, {
  title: 'Novo Título',
  description: 'Nova Descrição'
})

console.log(book2)