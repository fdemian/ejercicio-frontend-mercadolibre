var request = require('request');
var utils = require('../utils');
var config = require('../config');
const logger = require('../loggerConfig');

const splitPrice = utils.splitPrice;

function getCategories(results){

  const {filters, available_filters} = results;

  let filterValues;

  if(filters && filters.length > 0){
     filterValues = filters;
  }
  else {
     if(available_filters && available_filters.length > 0)
        filterValues = available_filters;
  }

  const categoryFilters = filterValues.filter(f => f.id === "category");
  const categorias = categoryFilters[0].values;

  return categorias;
}

function mapItem(item){
  const splittedPrice = splitPrice(item.price);
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: splittedPrice.integerPart,
      decimals: splittedPrice.decimalPart
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
}

function getItems(results, limit){
  const initialItems = results.results.slice(0, limit); // Get first n elements from array.
  const mappedItems = initialItems.map(i => mapItem(i));
  return mappedItems;
}

function getItemsFromAPI(req, res) {
  const searchValue = encodeURIComponent(req.query.q);
  const endpoint =  `/sites/MLA/search?q=${searchValue}`;
  const getItemsURL = config.API_BASE_URL + endpoint;

  // Console logging.
  logger.info("/api/items")

  request.get(getItemsURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const parsedResults = JSON.parse(body);
        const categories = getCategories(parsedResults);
        const items = getItems(parsedResults, config.itemsLimit);
        const productFilter = parsedResults.available_filters
                                           .filter(f => f.id =="product");

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
