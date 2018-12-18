/* MLM Customer */

var express = require('express');
var app = express();
var port = process.env.port || 3004

app.get('/',function(req, res, next){
	res.send('mlm-distributors');
});
app.get('/getDistributors',function(req, res, next){
	res.sendFile(__dirname + '/data.json');
});

app.listen(port);