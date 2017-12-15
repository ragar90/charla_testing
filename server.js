var app = require('express')();
var http = require('http').Server(app);
console.log('Starting Server.....')


// app.get('/measure', function (req, res) {
// })

http.listen(3000, function () {
  console.log('listening on *:3000');
});