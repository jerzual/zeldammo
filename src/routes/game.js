var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the /game/ home page route
router.get('/', function(req, res) {
    res.send('Game home page');
});
// define the /game/about route
router.get('/about', function(req, res) {
    res.send('About the game');
});

module.exports = router;
