var express = require('express'),
    router = express.Router();

router.get('/login', function(req, res) {
    console.log('Login!');
});

router.get('/logout', function(req, res) {
    console.log('Logout!');
});

module.exports = router;