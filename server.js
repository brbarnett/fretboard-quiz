var express  = require('express');
var app      = express();    

app.use(express.static(__dirname + '/dist'));

var port = process.env.port || 1337;

app.get('*', function (req, res) {
    res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port);