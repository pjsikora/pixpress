var fs = require("fs"),
    date = new Date(),
    pathToFile = '../../logs/log.txt',
    objectToSave = {
        date: ""+date+"",
        value: "val"
    };

exports.append(log, file) {
    fs.appendFile(file, log, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}
