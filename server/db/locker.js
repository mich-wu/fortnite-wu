const connection = require('./connection')

// get all locker data
function getLocker(db = connection) {
  return db('locker').select()
}

module.exports = {
  getLocker,
}
