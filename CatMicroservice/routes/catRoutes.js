const express = require('express');
const { getCats } = require('../controller/catController');

const router = express.Router();

router.get('/', getCats);

module.exports = router;