const { heroTeaser } = require('./hero-teaser')
const { page } = require('./page')

const v1 = (migration) => {
    heroTeaser(migration)
    page(migration)
}

module.exports.v1 = v1