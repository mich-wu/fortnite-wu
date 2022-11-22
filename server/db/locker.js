const connection = require('./connection')

// GET all locker data
function getLocker(db = connection) {
  return db('locker').select()
}

// GET individual locker item, by id
function getItem(id, db = connection) {
  return db('locker').where('id', id).select().first()
}

//POST new item/cosmetic to locker database
function addItem(newItem, db = connection) {
  return db('locker').insert(newItem)
}

module.exports = {
  getLocker,
  getItem,
  addItem,
}
