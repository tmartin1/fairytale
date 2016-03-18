var path = require('path');
var express = require('express');

var app = express();

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

app.route('/')
    .get(function (req, res) {
        res.sendFile(path.join(process.cwd(), 'index.html'));
    });

app.route('*')
    .get(function (req, res) {
        res.sendFile(path.join(process.cwd(), req.path));
    });

app.listen(port, function () {
    console.log('App listening on ' + host + ':' + port);
});
