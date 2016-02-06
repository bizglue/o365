var express = require("express");

var port = process.env.PORT || 1338;
var app = express();

app.get('/', function(req, res){
	res.write('bizglue/o365');
	res.end();
});

app.listen(port, function(){
	console.log('Example app listening on port' + port);
});
