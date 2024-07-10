const express = require('express');
const { getDogs } = require('../controller/dogController');

const router = express.Router();

router.get('/', getDogs);

module.exports = router;