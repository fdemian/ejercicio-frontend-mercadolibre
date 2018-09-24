var request = require('request');

const mercadoAPIBaseURL = "https://api.mercadolibre.com";
const author = {
  name: "Federico",
  lastname: "Caminiti"
};

function itemDetail(req, res) {
  var id = decodeURIComponent(req.params.id);
  var getItemURL = mercadoAPIBaseURL + "/items/​" + id;

  console.log('/api/items/' + id);

  let responseDetail;

  request.get(getItemURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const itemDetail = JSON.parse(body);

        const descEndpoint = `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, "");
        var getItemDescriptionURL = mercadoAPIBaseURL + descEndpoint;
        request.get(getItemDescriptionURL, function(error, response, body) {
          if (!error && response.statusCode === 200) {

            const description = JSON.parse(body);

            responseDetail = {
              author: author,
              item: {
                id: itemDetail.id,
                title: itemDetail.title,
                price: {
                 currency: itemDetail.currency_id,
                 amount: itemDetail.price,
                 decimals: 0,
                },
                picture: "//TODO",
                condition: itemDetail.condition,
                free_shipping: itemDetail.shipping.free_shipping,
                sold_quantity: itemDetail.sold_quantity,
                description: description.plain_text
               }
            };

            res.json(responseDetail);
          }
          else{
            res.json(error);
          }
        })

      }
      else {
        // Error
        console.log(body);
        res.send(body);
      }

  })



}

module.exports = itemDetail;
