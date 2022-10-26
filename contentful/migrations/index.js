const { v0 } = require('./2022-08-15_0_base')
const { v1 } = require('./2022-08-26_1_hero')

const versions = [v1]

module.exports = function(migration) {
  versions.forEach((v) => v(migration))
}