'use strict';

var _ = require('lodash');

var request = require('request');
var cheerio = require('cheerio');

// Get list of scrapers
exports.index = function(req, res) {
  var url = req.body.url;
  if(!url) res.send(500, "No url specified");

  request(url, function(error, response, html) {
    if(error)
      return res.send(500, "Request error: " + error);

    var $ = cheerio.load(html);
    var tags = $('*');
    var tagsCounter = {};
    for(var index in tags) {
      if(tags[index].type === 'tag') {
        var tagName = tags[index].name;
        if(!tagsCounter[tagName]) tagsCounter[tagName] = 0;
        tagsCounter[tagName]++;
      }
    }

    res.json({tagsCounter: tagsCounter});
  });
};
