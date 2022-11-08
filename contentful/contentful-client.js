const { createClient } = require('contentful')
const config = require('../config')

const createContentfulClient = () => createClient(config.contentful)

module.exports.createContentfulClient = createContentfulClient
