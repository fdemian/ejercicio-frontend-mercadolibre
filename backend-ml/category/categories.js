const express = require('express');
const request = require('request');
const config = require('../config');
const logger = require('../loggerConfig');

const router = express.Router();

// /api/categories
router.get('/:id', categoryDetail);

function categoryDetail(req, res) {

  const id = decodeURIComponent(req.params.id);

  logger.info("/categories/"+ id)

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
