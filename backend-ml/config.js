var config = {
  author: {
    name: "Federico",
    lastname: "Caminiti"
  },
  API_BASE_URL: "https://api.mercadolibre.com",
  itemsLimit: 4,
  port: 8000,
  logger: {
    combinedFile: 'combined.log',
    errorFile: 'error.log'
  }
};

module.exports = config;
