var express = require('express');
var app = express();
var router = express.Router();

var candidates = [
			{ 'name': "Donald Trump", 'link': "http://www.politifact.com/personalities/donald-trump/", 'image': "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWiYRvtvEauKCFgNtarioS6xeIEbx63929ShZDRebWbcitGGCU", 'text': "Donald Trump has been a real estate developer, entrepreneur and host of the NBC reality show, \"The Apprentice.\" He is the nominee for the Republican presidential nomination in 2016. Trump's statements were awarded PolitiFact's 2015 Lie of the Year."},
			{ 'name': "Hillary Clinton", 'link': "http://www.politifact.com/personalities/hillary-clinton/", 'image': "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMDU4NTc3NDIy.jpg", 'text': "Hillary Clinton is the 2016 Democratic nominee for president. She served as U.S. Secretary of State during the first four years of the Obama administration. She is formerly a U.S. senator from New York, first elected in 2000. She was a candidate for president in 2008. She previously served as first lady when her husband, Bill Clinton, served two terms as president. She was born in Chicago in 1947, graduated from Wellesley College and earned a law degree at Yale Law School. She and her husband have one daughter."},
			{ 'name': "Jill Stein", 'link': "http://www.politifact.com/personalities/jill-stein/", 'image': "https://pbs.twimg.com/profile_images/756593715833995264/58FJ0pQJ.jpg", 'text': "Dr. Jill Stein, the Green Party presidential nominee in 2012 and 2016, is a Massachusetts activist and physician."},
			{ 'name': "Gary Johnson", 'link': "http://www.politifact.com/personalities/gary-johnson/", 'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Garyjohnsonphoto_-_modified.jpg/220px-Garyjohnsonphoto_-_modified.jpg", 'text': "Gary Johnson is the Libertarian nominee for president in 2016. He was also the party's nominee in 2012. He previously served as governor of New Mexico as a Republican."},
			{ 'name': "Evan McMullin", 'link': "https://www.evanmcmullin.com/", 'image': "https://pbs.twimg.com/profile_images/771412672738955264/sRBfBvjW.jpg", 'text': "David Evan McMullin is an American politician. He was formerly chief policy director for the House Republican Conference in the U.S. House of Representatives. He has also been a CIA operations officer, a volunteer refugee resettlement officer for the United Nations High Commissioner for Refugees in Jordan, as well as an investment banker."}
		];

app.get('/', function (req, res) {
res.sendFile('survey.html', {root: 'public'});

});

app.get('/getDetails', function(req, res) {
	console.log("in get details")

	var candidate = req.query.candidate
	var sex = req.query.sex

	console.log("received: " + candidate + " " + sex)
	var jsonresult;
	if(candidate == "trump"){
		jsonresult = candidates[0];
	}			
	else if(candidate == "clinton"){
		jsonresult = candidates[1];
	}
	else if(candidate == "stein"){
		jsonresult = candidates[2];
	}
	else if(candidate == "johnson"){
		jsonresult = candidates[3];
	}
	else if(candidate == "mcmullin"){
		jsonresult = candidates[4];
	}
	else{
		jsonresult = { 'name': "So many other choices!", 'link': "https://www.isidewith.com/", 'image': "http://touseef.com/wp-content/uploads/sites/20/2014/08/shutterstock_172913240-VOTE-BALLOT-QUESTION-MARK-940X540.jpg", 'text': "There are more possibilities on who to vote for in this upcoming election.  It can be very difficult to choose who is the best option.  You should make sure you think things through so that you can have a good conscience voting for who you feel can best respresent this Country as the President of the United States of America."};
	}
	res.status(200).json(jsonresult)
});
app.use(express.static('resources'));

app.listen(3000, function () {
  console.log(' listening on port 3000!');
});

