var express = require('express');
var request = require('request');

var itemDetail = require('./itemDetail');
var itemsDetail = require('./itemsDetail');

var router = express.Router();

// Routes handling.
router.get('/', itemsDetail);
router.get('/:id', itemDetail);


module.exports = router;
