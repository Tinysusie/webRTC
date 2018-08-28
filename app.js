var express = require('express');
var app = express();

app.use(express.static('static'));
var server = app.listen(6080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app lisening at http://%s:%s', host, port)
})