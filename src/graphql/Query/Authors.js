const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const authorsByNumBooks = async(obj, { num }, context) => {
    try{
        const authors = await Author.query().where('numBooksPublished', num)
        return authors
    } catch(err) {
        console.log(err)
        throw new Error('failed to get authors')
    }
}

const books = async({ id }, param, context) => {
    const b = await Book.query().where('authorId', id )
    return b
}

const publisher = async({ publisherId }, params, context) => {
    const p = await Publisher.query().findOne('id', publisherId)
    return p
}

const author = async({ authorId }, params, context) => {
    const a = await Author.query().findOne('id', authorId)
    return a
}

const address = async({ addressId }, params, context) => {
    const a = await Address.query().findOne('id', addressId)
    return a
}

const resolver = {
    Query: {
        authorsByNumBooks
    },
    Book: {
        publisher,
        author
    },
    Publisher: {
        address
    },
    Author: {
        address,
        books
    }
}

module.exports = resolver