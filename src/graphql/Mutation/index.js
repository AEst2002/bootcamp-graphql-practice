const merge = require('lodash.merge')
const Books = require('./Books')

const resolvers = [Books]

module.exports = merge(...resolvers)
