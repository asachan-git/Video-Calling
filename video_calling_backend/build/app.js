import express from 'express';
var app = express();
var port = 3001;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:".concat(port));
});
