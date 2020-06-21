var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'images');

app.use('/assests', express.static(dir))

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});
