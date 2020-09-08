const express = require('express');
const router = express.Router();

//  User Home Route
router.get('/', (req, res) => res.send('User route'));

module.exports = router;