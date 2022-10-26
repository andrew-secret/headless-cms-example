const { site } = require('./site')
const { navigation } = require('./navigation')
const { page } = require('./page')
const { block } = require('./block')
const { image } = require('./image')
const { link } = require('./link')

const v0 = (migration) => {
  site(migration)
  navigation(migration)
  page(migration)
  block(migration)
  image(migration)
  link(migration)
}

module.exports.v0 = v0