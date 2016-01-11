var express = require('express'),
app = express(),
GPIO = require('onoff').Gpio,
led = new GPIO('5', 'out');

// app.get('/', function(req, res) {
// 	res.send('hello world');
// 	console.log('/ token');
// });

app.get('/on', function(req, res) {
	console.log('on');
	led.writeSync(1);
});

app.get('/off', function(req, res) {
	console.log('off');
	led.writeSync(0);
});

app.get('/read', function(req, res) {
	console.log('value: '+led.readSync());
});

app.get('/anim', function(req, res) {
	console.log('animation');
	var enabled = 0,
	fn = setInterval(function() {
		if (enabled) {
			led.writeSync(0);
			enabled = 0;
		}
		else {
			led.writeSync(1);
			enabled = 1;
		}
	}, 500);
});

app.listen(3000, function() {
	console.log('server on');
});

app.use(express.static('public'));
