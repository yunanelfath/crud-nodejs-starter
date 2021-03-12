const express = require('express')
const router = express.Router()

const pjson = require('./package.json');
const playlistControllers = require('./src/controllers/playlist/playlist.controller')

router.get('/health', (req, res)=>{
	return res.send({
		version: pjson.version,
		name: pjson.name,
		author: pjson.author
	})
})
router.get('/playlist/link/:id', playlistControllers.getList)

router.use(function(req, res, next) {
    if (!req.route)
	    return res.status(404).json({
	      errornum: 404,
	      errorstr: "Not found"
	    })
    next();
});


module.exports = router
