const path = require('path')
require('dotenv').config({path: path.join(__dirname, '../.env')})

const express = require('express')
const app = express()

const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const api = require('./routes/api')

// View engine setup
app.set('views', path.join(__dirname, '/../public/views'))
app.set('view engine', 'hjs')

app.use(favicon(__dirname + '/../public/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/../public')))

// Handlers
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/views/index.html'))
})
app.use('/api', api)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handlers

// Development error handler
// Will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// Production error handler
// No stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

const port = process.env.PORT || '3000'
app.set('port', port)

// Start the server
const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})
