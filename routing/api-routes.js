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
		// CHANGE THIS SHIT
		friendsData.push(req.body);
		res.json(true); // KEY LINE
	});
};