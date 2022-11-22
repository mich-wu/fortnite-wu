const express = require('express')
const db = require('../db/locker')

const router = express.Router()

//GET view all locker contents
router.get('/', (req, res) => {
  db.getLocker()
    .then((contents) => {
      res.json(contents)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
