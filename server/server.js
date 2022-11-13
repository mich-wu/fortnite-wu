const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')
const dotenv = require('dotenv')
dotenv.config()

const apiKey = process.env.FORTNITE_API_KEY

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

server.get('/api/v1/store', (req, res) => {
  request
    .get('https://api.fortnitetracker.com/v1/store')
    .set('FORTNITE_API_KEY', apiKey)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

module.exports = server
