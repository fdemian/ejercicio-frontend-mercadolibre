var request = require('request');

const mercadoAPIBaseURL = "https://api.mercadolibre.com";

function itemDetail(req, res) {
  var id = encodeURIComponent(req.params.id);
  var getItemURL = mercadoAPIBaseURL + "/items/​" + id; // Replace for actual id.
  var getItemDescriptionURL = getItemURL + "/description";

  console.log('/api/items/' + id);
  console.log(getItemURL);


}

module.exports = itemDetail;
