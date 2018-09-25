var express = require('express');
var request = require('request');

var config = require('../config');

var router = express.Router();

// /api/categories
router.get('/:id', categoryDetail);

function categoryDetail(req, res) {
  const id = decodeURIComponent(req.params.id);
  const getCategoryInfoURL = config.API_BASE_URL + "/categories/" + id;
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

module.exports = router;
