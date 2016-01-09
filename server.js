// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'),       // call express
    app        = express(),                // define our app using express
    bodyParser = require('body-parser');

// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'both');

// define the callback function
function light(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
  } else {
    // turn LED off
    led.writeSync(0);
  }

}

// pass the callback function to the
// as the first argument to watch()
button.watch(light);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var port = process.env.PORT || 8080;        // set our port
var port = 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/soop', function(req, res) {
    res.json({ message: 'soop! welcome to our api!' });
});

router.get('/enable', function(req, res) {
  led.writeSync(1);
});

router.get('/disable', function(req, res) {
  led.writeSync(0);
});

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
