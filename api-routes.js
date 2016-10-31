//================================== routes for API ====================================

var express = require('express');

module.exports = (function() {
    'use strict';
    var api = express.Router();

    api.get('/api/friends', function(req, res) {
        // return all friends as json
    });
    
    api.post('/api/friends', function(req, res) {
      // insert new friend json
    });

    return api;
})();
