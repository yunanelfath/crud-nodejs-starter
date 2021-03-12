const config = require('../config')
const expressLoader = require('../../app');
const Container = require('typedi').Container;

module.exports = async (expressApp) => {

  const mysqlPool = require('./connection')(config.mysql);

  Container.set("mysqlpool", mysqlPool);
  console.log('connection started...');
  await expressLoader(expressApp);
};
