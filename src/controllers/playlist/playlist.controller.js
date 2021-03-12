const playlistModel = require('../../models/playlist.model');

const getList = async (req, res) => {
    let _req = req.query;
    let status = _req.status;
    let page = (_req.page === undefined) ? 1 : _req.page;
    let limit = 10
    let offset = (page - 1) * limit;

    const {
      id
    } = req.params

    try {
      let data = await playlistModel.detail({ id })
      return res.json({
        status: 'success',
        result: data
      });
    } catch (e) {
      return res.status(500).json({
        status: 'failed',
        result: e.message
      });
    }
  }

  module.exports = {
    getList
  }
