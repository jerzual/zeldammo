var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the /auth/ home page route
router.get('/', function(req, res) {
    res.send('Auth home page');
});
// define the /auth/twitter route
router.get('/twitter', function(req, res) {
    res.send('About twitter auth');
});

module.exports = router;
