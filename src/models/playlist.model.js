const Container = require("typedi").Container;

const model = {
  list: async function() {
    var mysqlpool = Container.get("mysqlpool");
    const [rows, fields] = await mysqlpool.query("SELECT * from playlist");
    return rows;
  },
  detail: async ({ id }) => {
    var mysqlpool = Container.get("mysqlpool");
    const [rows, fields] = await mysqlpool.query("SELECT * from playlist where id = ?", id);
    return rows;
  }
};
module.exports = model;
