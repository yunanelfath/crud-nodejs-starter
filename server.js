const express = require('express')


// const subscriber = require('./src/utils/subscriber')
const config = require('./src/config')


const server = async () =>{
  const app = express()

  await require('./src/models/db')(app)

  // subscriber.subscribe()
  app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}...`)
  })
}


server()
