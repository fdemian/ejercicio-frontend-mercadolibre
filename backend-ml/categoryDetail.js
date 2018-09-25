var request = require('request');
var config = require('./config');

function itemDetail(req, res) {
  var id = decodeURIComponent(req.params.id);
  var getCategoryInfoURL = config.API_BASE_URL + "/categories/" + id;

  console.log('/api/categories/' + id);

  let responseDetail;

  request.get(getCategoryInfoURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(body);
      }
      else{
        res.json({status: 500, msg: "Server error"});
      }

  })
}

module.exports = itemDetail;
