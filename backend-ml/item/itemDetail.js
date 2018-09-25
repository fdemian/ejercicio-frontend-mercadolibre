const request = require('request');
const utils = require('../utils');
const config = require('../config');
const logger = require('../loggerConfig');

const splitPrice = utils.splitPrice;

const getDescriptionEndpoint: (id) => {
   return `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, "");
}

function itemDetail(req, res) {
  var id = decodeURIComponent(req.params.id);
  var getItemURL = config.API_BASE_URL + "/items/​" + id;

  logger.info("/categories/"+ id)

  let responseDetail;

  request.get(getItemURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

      const itemDetail = JSON.parse(body);
      const getDescriptionURL = config.API_BASE_URL + getDescriptionEndpoint();
      request.get(getDescriptionURL, function(error, response, body) {

         if (!error && response.statusCode === 200) {

          const description = JSON.parse(body);
          const formattedPrice = splitPrice(itemDetail.price);

          responseDetail = {
            author: config.author,
            item: {
              id: itemDetail.id,
              title: itemDetail.title,
              price: {
                currency: itemDetail.currency_id,
                amount: formattedPrice.integerPart,
                decimals: formattedPrice.decimalPart,
              },
              picture: itemDetail.pictures[0].url,
              condition: itemDetail.condition,
              free_shipping: itemDetail.shipping.free_shipping,
              sold_quantity: itemDetail.sold_quantity,
              description: description.plain_text,
              categoryId: itemDetail.category_id
            }
          };

          res.json(responseDetail);
        }
        else {
          res.json({status: 500, error: "Server error"});
        }
      })

    }
    else {
      // Error
      res.json({status: 500, error: "Server error"});
    }

  })

}

module.exports = itemDetail;
