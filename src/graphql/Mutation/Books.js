const { title } = require('casual')
const Book = require('../../models/Book')

const addBook = async(obj, { input }, context) => {
    try{
        const newBook = await Book.query().insert({
            title: input.title,
            language: input.language,
            numPages: input.numPages,
            datePublished: input.datePublished,
            bestseller: input.bestseller,
            authorId: input.authorId,
            publisherId: input.publisherId

        }).returning('*')
        return newBook
    } catch(err) {
        console.log(err)
        throw new Error('failed to add book')
    }
}

const resolver = {
    Mutation: {
        addBook,
    }
}

module.exports = resolver