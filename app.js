var express = require('express');
var app = express();
var router = express.Router();


app.get('/', function (req, res) {
res.sendFile('survey.html', {root: 'public'});

});

app.get('/getDetails', function(req, res) {
	console.log("in get details")
	var jsonresult ="{{'trump': 300},{'hillary': 400},{'stein': 10},{'johnson':20},{'mcmulling':15}}"
			
	res.status(200).json(jsonresult)
});


app.listen(3000, function () {
  console.log(' listening on port 3000!');
});

