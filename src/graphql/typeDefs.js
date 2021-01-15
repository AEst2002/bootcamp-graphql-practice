const { gql } = require('apollo-server-express')

//3 queries and 2 mutations
//4 types and 2 inputs

module.exports = gql`
  type Query {
    welcome: String!
    publisherById(id: ID!): Publisher!
    booksByAuthorId(authorId: ID!): [Book!]
    allBooks: [Book!]
    authorsByNumBooks(num: Int!): [Author!]
  }
  
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: String!
    address: Address!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: String!
    email: String!
    numBooksPublished: Int!
    address: Address!
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: String!
    datePublished: String!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: addAddressInput!
  }

  input addBookInput {
    title: String!
    language: String!
    numPages: String!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  input addAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Mutation {
    addPublisher(input: addPublisherInput): Publisher!
    addBook(input: addBookInput): Book!
  }


`
