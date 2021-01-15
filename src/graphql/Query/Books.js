const Book = require('../../models/Book')

const booksByAuthorId = async(obj, { authorId }, context) => {
    try {
        const books = await Book.query().where('authorId', authorId)
        return books
    } catch(err) {
        console.log(err)
        throw new Error('failed to get books')
    }
}

const allBooks = async() => {
    try {
        const books = await Book.query()
        return books
    } catch (err) {
        console.log(err)
        throw new Error('failed to get all books')
    }
}


const resolver = {
    Query: {
        booksByAuthorId,
        allBooks
    }
}

module.exports = resolver
