var express = require('express'),
    app = express(),

    routesViews = require('./routes/views'),
    routesApi = require('./routes/api');

app.use('/', routesViews);
app.use('/api', routesApi);

app.listen(3000, function () {
    console.log('Start server');
});

app.set('view engine', 'jade');

app.use(express.static('public'));
