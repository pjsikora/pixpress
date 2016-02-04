//console.log('GPIO');
var GPIO = require('onoff').Gpio,
    led02 = new GPIO(2, 'out'),
    led03 = new GPIO(3, 'out'),
    led04 = new GPIO(4, 'both'),
    led05 = new GPIO(5, 'out'),
    led06 = new GPIO(6, 'out'),
    led07 = new GPIO(7, 'out'),
    led08 = new GPIO(8, 'out'),
    led09 = new GPIO(9, 'out'),
    led10 = new GPIO(10, 'out'),
    led11 = new GPIO(11, 'out'),
    led12 = new GPIO(12, 'out'),
    led13 = new GPIO(13, 'out'),
    led14 = new GPIO(14, 'out'),
    led15 = new GPIO(15, 'out'),
    led16 = new GPIO(16, 'out'),
    led17 = new GPIO(17, 'out'),
    led18 = new GPIO(18, 'out'),
    led19 = new GPIO(19, 'out'),
    led20 = new GPIO(20, 'out'),
    led21 = new GPIO(21, 'out'),
    led22 = new GPIO(22, 'out'),
    led23 = new GPIO(23, 'out'),
    led24 = new GPIO(24, 'out'),
    led25 = new GPIO(25, 'out'),
    led26 = new GPIO(26, 'out'),
    led27 = new GPIO(27, 'out'),

    leds = {
        '2': led02,
        '3': led03,
        '4': led04,
        '5': led05,
        '6': led06,
        '7': led07,
        '8': led08,
        '9': led09,
        '10': led10,
        '11': led11,
        '12': led12,
        '13': led13,
        '14': led14,
        '15': led15,
        '16': led16,
        '17': led17,
        '18': led18,
        '19': led19,
        '20': led20,
        '21': led21,
        '22': led22,
        '23': led23,
        '24': led24,
        '25': led25,
        '26': led26,
        '27': led27
    };

exports.enable = function (el) {
    if (leds[el].readSync() == 0) {
        leds[el].writeSync(1);
        return 1;
    }
    else {
        return 0;
    }
}

exports.disable = function (el) {
    if (leds[el].readSync() == 1) {
        leds[el].writeSync(0);
        return 1;
    }
    else {
        return 0;
    }
}

exports.enableAll = function () {
    led04.writeSync(1);
    led05.writeSync(1);
    led06.writeSync(1);
    led07.writeSync(1);
    led08.writeSync(1);
}

exports.disableAll = function () {
    led04.writeSync(0);
    led05.writeSync(0);
    led06.writeSync(0);
    led07.writeSync(0);
    led08.writeSync(0);
}

exports.watchAll = function () {
    led04.watch(function (err, value) {
        led04.writeSync(value);
        console.log('WATCH');
        console.log(led04.writeSync(value));
    });
}

exports.readAll = function (err, value) {
    led04.read(function () {
        console.log('Read of Led 04: ' + value)
    })
}

exports.leftToRight = function (first, last, time) {

}