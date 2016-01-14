var express = require('express'),
    gpio = require('./animate-gpio.js'),
    app = express(),
    GPIO = require('onoff').Gpio,

    led04 = new GPIO('4', 'out'),
    led05 = new GPIO('5', 'out'),
    led06 = new GPIO('6', 'out'),
    led07 = new GPIO('7', 'out'),
    led08 = new GPIO('8', 'out');


function printRequestInfo(name, req) {
    console.log('Req IP: '+ req.connection.remoteAddress + ' | '+ new Date() +' | request name: ' + name);
}

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/read', function(req, res) {
    res.render('read');
});

app.get('/on', function (req, res) {
    gpio.enableAll();
    printRequestInfo('/on', req);

    res.json({message: 'led is on'});
});

app.get('/off', function (req, res) {
    gpio.disableAll();
    printRequestInfo('/off', req);

    res.json({message: 'led is off'});
});

app.get('/enable/:led', function (req, res) {
    gpio.enable(req.params.led);
    printRequestInfo('/enable/'+req.params.led, req);

    res.json({message: 'led is on'});
});

app.get('/disable/:led', function (req, res) {
    gpio.disable(req.params.led);
    printRequestInfo('/disable/'+req.params.led, req);

    res.json({message: 'led is on'});
});

//app.get('/read', function (req, res) {
//    console.log('value: ' + led.readSync());
//    res.json({message: led.readSync()});
//});

app.get('/animate-on', function (req, res) {
    console.log('animation');

    var enabled = 0;

    animation = setInterval(function () {
            if (enabled) {
                led04.writeSync(0);
                enabled = 0;
            }
            else {
                led04.writeSync(1);
                enabled = 1;
            }
        }, 500);

    res.json({message: 'animation is started'});
});

app.get('/animate-off', function (req, res) {
    console.log('animation');

    animation = clearInterval(animation);

    res.json({message: 'animation is ended'});
});

app.listen(3000, function () {
    console.log('server on');
});

app.set('view engine', 'jade');

app.use(express.static('public'));
