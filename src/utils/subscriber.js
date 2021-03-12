const express = require("express")
const redis = require("redis")
const config = require('../config')
const sleep = require('./sleep')

const subscriber = redis.createClient(config.redis)

const subscribe = ()=>{
	subscriber.on("message", (channel, message) => {
		console.log('service running ', message);
	})
	subscriber.subscribe("service-run")
}
module.exports = {
	subscribe
}
