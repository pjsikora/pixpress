var fs = require("fs"),
    date = new Date(),
    pathToFile = '../logs/log.txt',
    objectToSave = {
        date: ""+date+"",
        value: "val"
    }


fs.appendFile(pathToFile, '\n'+ JSON.stringify(objectToSave), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});