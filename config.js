require('dotenv').config()

const config = {
  contentful: {
    space: process.env.CONTENTFUL_SPACE,
    enviroment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  },
  contentfulManagement: {
    spaceId: process.env.CONTENTFUL_SPACE,
    environmentId: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  },
}

module.exports = config
