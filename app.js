const express = require('express')
const routes = require('./routes')
const config = require('./src/config')

const expressApp = async (app) =>{
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())


  app.use((req, res, next)=>{
    const apikey = req.header(config.api_secret_key_label)

    if(apikey !== config.api_secret_key_value && req.originalUrl !== "/health")
      return res.status(400).json({
        errornum: 400,
        errorstr: "Unauthorized"
      })
    next()
  })

  app.use('/', routes)
}


module.exports = expressApp
