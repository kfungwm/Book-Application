var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/index.html', {}));
  // response.sendFile(__dirname + '/index.html');
});

app.get('/book1', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/book1.html', {}));
});

app.get('/book2', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/book2.html', {}));
});

app.get('/book3', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/book3.html', {}));
});

app.listen(3000, function() {
  console.log('Web server started on port 3000');
});
