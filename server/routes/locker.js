const express = require('express')
const db = require('../db/locker')

const router = express.Router()

//GET view all locker contents
router.get('/', (req, res) => {
  db.getLocker()
    .then((lockerContents) => {
      res.json(lockerContents)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET individual locker item
router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getItem(id)
    .then((cosmetic) => {
      res.json(cosmetic)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//POST add new cosmetic/item to database
router.post('/', (req, res) => {
  const newItem = req.body
  db.addItem(newItem)
    .then(() => {
      return db.getLocker()
    })
    .then((lockerContents) => {
      res.json(lockerContents)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//DELETE individual item from database
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteItem(id)
    .then(() => {
      return db.getLocker()
    })
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
