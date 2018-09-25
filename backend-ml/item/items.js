const express = require('express');
const request = require('request');
const itemDetail = require('./itemDetail');
const itemsDetail = require('./itemsDetail');

const router = express.Router();

// Routes handling.
router.get('/', itemsDetail);
router.get('/:id', itemDetail);


module.exports = router;
