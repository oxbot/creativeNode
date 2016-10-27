var express = require('express');
var app = express();
var router = express.Router();


app.get('/', function (req, res) {
res.sendFile('survey.html', {root: 'public'});

});

app.get('/getDetails', function(req, res) {
	console.log("in get details")

	var candidate = req.query.candidate
	var sex = req.query.sex

	console.log("received: " + candidate + " " + sex)
	var jsonresult ={'name': "trump"}
			
	res.status(200).json(jsonresult)
});
app.use(express.static('resources'));

app.listen(3000, function () {
  console.log(' listening on port 3000!');
});

