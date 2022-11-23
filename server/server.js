const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')
const dotenv = require('dotenv')
dotenv.config()

const locker = require('./routes/locker')

// -- API KEY -- //
const apiKey = process.env.FORTNITE_API_KEY
const key = process.env.FN_API_KEY

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/locker', locker)

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

// BELOW IS USING API FROM https://dash.fortnite-api.com/

server.get('/api/v2/news/br', (req, res) => {
  request
    .get('https://fortnite-api.com/v2/news/br')
    .then((data) => {
      res.json(data.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})

server.get('/api/v2/crew', (req, res) => {
  request
    .get('https://fortniteapi.io/v2/crew?lang=en')
    .set('Authorization', key)
    .then((data) => {
      res.json(data.body)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})
server.get('/api/v3/challenges', (req, res) => {
  request
    .get('https://fortniteapi.io/v3/challenges?season=current&lang=en')
    .set('Authorization', key)
    .then((data) => {
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

// NOT WORKING
// server.get('/api/v1/challenges', (req, res) => {
//   request
//     .get('https://api.fortnitetracker.com/v1/challenges')
//     .set('TRN-Api-Key', apiKey)
//     .then((data) => {
//       console.log('data', data.body)
//       res.json(data.body)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// })

// NOT WORKING//

// server.get('/api/v1/profile/', (req, res) => {
//   request
//     .get('https://api.fortnitetracker.com/v1/profile/gamepad/kitahanyu')
//     .set('TRN-Api-Key', apiKey)
//     .then((data) => {
//       //console.log('data', data.body)
//       res.json(data.body)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// })
