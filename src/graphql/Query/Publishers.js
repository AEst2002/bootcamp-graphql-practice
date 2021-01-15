const Publisher = require('../../models/Publisher')

const publisherById = async(obj, { id }, context) => {
    try {
        const publisher = await Publisher.query().findOne('id', id)
        return publisher
    } catch(err) {
        console.log(err)
        throw new Error('failed to get publisher')
    }
}


const resolver = {
    Query: {
        publisherById,
    },

}


module.exports = resolver