const dotenv = require('dotenv').config()



const redis = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_HOST
}

const mysqlConfig = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
	port: process.env.DBPORT,
  database: process.env.DBNAME
}

const config = {
	app_env: process.env.APP_ENV,
	api_secret_key_label: process.env.API_SECRET_KEY_LABEL,
	api_secret_key_value: process.env.API_SECRET_KEY_VALUE,
	port: process.env.PORT,
	debug: process.env.APP_DEBUG === "false" ? false : true,
}

module.exports = {
	...config,
	mysql: mysqlConfig,
	redis
}
