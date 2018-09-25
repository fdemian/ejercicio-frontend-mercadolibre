var request = require('request');

const mercadoAPIBaseURL = "https://api.mercadolibre.com";
const author = {
  name: "Federico",
  lastname: "Caminiti"
};

function itemDetail(req, res) {
  var id = decodeURIComponent(req.params.id);
  var getCategoryInfoURL = mercadoAPIBaseURL + "/categories/" + id;

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
