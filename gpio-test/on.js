var GPIO = require('onoff').Gpio,
led = new GPIO(18, 'out'),

led.writeSync(1);
