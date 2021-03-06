var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var mainpage = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(mainpage.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});