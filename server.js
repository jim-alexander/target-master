import express from 'express'
import path from 'path'
import cors from 'cors'
import compression from 'compression'

import { wordGenerator, solveLetters } from './Components/newFunctions.js'

const dirname = path.resolve()
var app = express()
app.use(cors())
app.use(compression())
app.use(express.static(path.join(dirname, 'client/build')))

app.get('/api/generate', (request, response) => {
  response.json(wordGenerator(100))
})

app.get('/api/solve', (request, response) => {
  response.json(solveLetters(request.query.letters, request.query.index))
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port: ${port}`))
