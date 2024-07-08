const express = require('express');
const { getDogs } = require('../controllers/dogController');

const router = express.Router();

router.get('/', getDogs);

module.exports = router;