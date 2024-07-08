const express = require('express');
const { getCats } = require('../controllers/catController');

const router = express.Router();

router.get('/', getCats);

module.exports = router;