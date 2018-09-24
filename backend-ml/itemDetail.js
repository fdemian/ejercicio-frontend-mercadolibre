var request = require('request');

const mercadoAPIBaseURL = "https://api.mercadolibre.com";
const author = {
  name: "Federico",
  lastname: "Caminiti"
};

function itemDetail(req, res) {
  var id = decodeURIComponent(req.params.id);
  var getItemURL = mercadoAPIBaseURL + "/items/​" + id; // Replace for actual id.
  var getItemDescriptionURL = getItemURL + "/description";

  console.log('/api/items/' + id);
  console.log(getItemURL);

  request.get(getItemURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const itemDetail = JSON.parse(body);
        const responseDetail = {
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
            description: ""
           }
        };

        console.log(getItemDescriptionURL);

        request.get(getItemDescriptionURL, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(body);
            console.log("_____");
          }
          else{
            console.log("()()()()");
            console.log(error);
            console.log(body);
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
