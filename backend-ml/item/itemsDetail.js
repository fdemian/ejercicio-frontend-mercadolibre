const request = require('request');
const utils = require('../utils');
const config = require('../config');
const mapFunctions = require('./mapFunctions')
const logger = require('../loggerConfig');

const splitPrice = utils.splitPrice;

function getItemsFromAPI(req, res) {
  const searchValue = encodeURIComponent(req.query.q);
  const endpoint =  `/sites/MLA/search?q=${searchValue}`;
  const getItemsURL = config.API_BASE_URL + endpoint;

  // Console logging.
  logger.info("/api/items")

  request.get(getItemsURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const parsedResults = JSON.parse(body);
        const categories = mapFunctions.getCategories(parsedResults);
        const items = mapFunctions.getItems(parsedResults, config.itemsLimit);

        var response = {
          author: config.author,
          categories: categories.map(c => c.name),
          mainCategory: categories[0].id,
          items: items
        }

        res.json(response);
      }
      else {
        // Error
        res.json({status: 500, error: "Server error"});
      }

  })

}

module.exports = getItemsFromAPI;
