const { createClient } = require('contentful')
const config = require('../config')

const createContentfulClient = () => {
  return createClient(config.contentful)
}

module.exports.createContentfulClient = createContentfulClient