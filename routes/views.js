var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    console.log('View: /');
    res.render('index');
});

router.get('/read', function(req, res) {
    res.render('read');
});

module.exports = router;