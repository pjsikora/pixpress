var GPIO = require('onoff').Gpio,
led = new GPIO(18, 'out');

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


