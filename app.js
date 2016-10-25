var express = require('express');
var app = express();
var router = express.Router();


app.get('/', function (req, res) {
res.sendFile('survey.html', {root: 'public'});

});

app.get('/getDetails', function(req, res) {
	console.log("in get details")
});


app.listen(3000, function () {
  console.log(' listening on port 3000!');
});

