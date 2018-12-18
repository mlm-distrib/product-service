/* MLM Customer */

var express = require('express');
var app = express();
var port = process.env.port || 8090

let jsonData = require('./data');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/',function(req, res, next){
	res.send('prod-service');
});
app.get('/products',function(req, res, next){
	res.send(jsonData);
});

app.listen(port);

console.log('server running at '+port)