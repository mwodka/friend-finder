var path = require('path');

// ===============================================================================
// LOAD DATA 
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require(path.join(__dirname + '/../data/friends'));

// API GET Requests
// Below code handles when users "visit" a page.
// ---------------------------------------------------------------------------
module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function (req, res) {
		res.json(getClosestMatch(req.body));
		console.log(getClosestMatch(req.body));
		friendsData.push(req.body);
		//res.json(true); // KEY LINE
	});



};

// extend the Array prototype
// so we can get the smallest number in an array
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

	function getClosestMatch(newPerson) {
		// first loop through our array of people who have taken the survey,
		// and create a new array of values denoting the difference in scores
		var diff = [];
		for (var i = 0; i < friendsData.length; i++) {
			var count = 0;
			for (var j = 0; j < newPerson.scores.length; j++) { // no reason to hardcode the length of this to 10
				count += Math.abs(newPerson.scores[j] - friendsData[i].scores[j]);
			}
			diff.push(count);
		}

		// now find the index of the lowest difference (from left to right if there are more than one)
		var closest = diff[0];
		var index;
		for (var i = 1; i < diff.length; i++) {
			if (diff[i] < closest) {
				closest = diff[i];
				index = i;
			}
		}

		// return the closest match
		return friendsData[index];
	}