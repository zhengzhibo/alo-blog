const low = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')
const config = require('../config')
const adapter = new FileSync(config.db.uri)
const db = low(adapter)

db._.mixin(lodashId)

console.log('init db...')
module.exports = db