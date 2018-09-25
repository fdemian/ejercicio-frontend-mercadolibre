const winston = require('winston');
const config = require('./config');

const options = {
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: config.logger.errorFile, level: 'error' }),
    new winston.transports.File({ filename: config.logger.combinedFile })
  ]
};

const logger = winston.createLogger(options);

module.exports = logger;
