const { runMigration } = require('contentful-migration')
const path = require('path')
const config = require('../config')

const migrate = async () => {
  try {
    // eslint-disable-next-line
    console.log({config})
    console.log('process env', process.env)
    console.log('__dirname', __dirname)
    await runMigration({
      filePath: path.join(__dirname, 'migrations', 'index.js'),
      ...config.contentfulManagement,
    })
  } catch (error) {
    // eslint-disable-next-line
    console.log('Error:', error)
  }
}

module.exports.migrate = migrate