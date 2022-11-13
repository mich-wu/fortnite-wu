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

server.get('/api/v1/store', (req, res) => {
  request
    .get('https://api.fortnitetracker.com/v1/store')
    .set('TRN-Api-Key', apiKey)
    .then((data) => {
      res.json(data.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

server.get('/api/v1/profile/', (req, res) => {
  request
    .get('https://api.fortnitetracker.com/v1/profile/gamepad/kitahanyu')
    .set('TRN-Api-Key', apiKey)
    .then((data) => {
      //console.log('data', data.body)
      res.json(data.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

server.get('/api/v1/challenges/', (req, res) => {
  request
    .get('https://api.fortnitetracker.com/v1/challenges')
    .set('TRN-Api-Key', apiKey)
    .then((data) => {
      console.log('data', data.body)
      res.json(data.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
module.exports = server
