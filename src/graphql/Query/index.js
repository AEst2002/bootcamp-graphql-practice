const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const Publishers = require('./Publishers')
const Books = require('./Books')
const Authors = require('./Authors')

const resolvers = [Welcome, Publishers, Books, Authors]

module.exports = merge(...resolvers)
