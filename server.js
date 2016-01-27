var path = require('path');
var express = require('express');

var app = express();

app.route('/')
    .get(function (req, res) {
        res.sendFile(path.join(process.cwd(), 'index.html'));
    });

app.route('*')
    .get(function (req, res) {
        res.sendFile(path.join(process.cwd(), req.path));
    });

app.listen(3000, function () {
    console.log('App listening on localhost:3000');
});
